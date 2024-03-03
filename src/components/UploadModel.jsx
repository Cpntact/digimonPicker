import { useState } from 'react';
import useUpload from '../hooks/useUpload'
import supabase from '../config/supabaseClient';
import Model from './Model';
import Input from './Input';
import {useForm} from "react-hook-form"
import Button from './Button';
import toast from "react-hot-toast"
import uniqid from 'uniqid'
const UploadModel = () => {
    const uploadModel = useUpload();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset
    } = useForm({
        defaultValues: {
            digimon:'',
            shadow: null,
        }
    })
    const onSubmit = async (value) => {
        try {
            setIsLoading(true);
            const image = value.shadow?.[0];
            if (!image) {
                toast.error('Missing fields')
                return
            }
            const url = `https://digi-api.com/api/v1/digimon/${value.digimon}`
            const res = fetch(url)
            const json = await (await res).json()
            const img_path = json.images[0].href;

            const uniq = uniqid();

            const {data: imgData, error: imgError} = await supabase.storage.from('shadow').upload(`shadow-${uniq}`,image, {cacheControl: '3600', upsert: false});
            if (imgError) {
                setIsLoading(false);
                console.log(imgError.message);
                return toast.error('Failed image upload')
            }

            const {error: supabaseError} = await supabase.from('digimon').insert({digimon_name: value.digimon, shadow_path: imgData.path, image_path: img_path});
            if (supabaseError) {
                return toast.error(supabaseError.message);
            }

            window.location.reload();
            setIsLoading(false);
            toast.success('Digmon inserted')
            reset();
            uploadModel.onClose();
        } catch(error) {
            toast.error('Something went wrong')
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    const onChange = (open) => {
        if (!open) {
            reset();
            uploadModel.onClose();
        }
    }

    return (
      <Model title="Add a digimon" description="Upload a shadow png" isOpen={uploadModel.isOpen} onChange={onChange}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
            <Input id="digimon" {...register('digimon', {required: true})} disabled={isLoading} placeholder="Digimon name"/>
            <div>
                <div className='pb-1'>
                    Select a digimon shadow file
                </div>
                <Input id="shadow" type="file" {...register('shadow', {required: true})} disabled={isLoading} accept=".png"/>
            </div>
            <Button disabled={isLoading} type="submit">
                Create
            </Button>
        </form>
      </Model>
    )
}

export default UploadModel;