import * as Switch from '@radix-ui/react-switch'

const SwitchDemo = ({state, onChange}) => (
  <form>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
        Airplane mode
      </label>
      <Switch.Root className="w-[42px] h-[25px] bg-black-a9 rounded-full relative shadow-SwitchRoot focus:shadow-[0_0_0_2px_black] data-checked:bg-black" id="airplane-mode" onCheckedChange={onChange}>
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-SwitchThumb translate-x-[2px] duration-100 data-checked:translate-x-[19px]" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchDemo;


  