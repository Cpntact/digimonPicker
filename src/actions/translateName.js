
function translateName(name) {
    if (name.includes("Ancient")) {name = name.replace(" ", "")}
    if (name.includes("Mega")) {name = name.replace(" ", "")}
    if (name.includes("Metal")) {name = name.replace(" ", "")}
    if (name.includes("Shine ")) {name = name.replace("Shine ", "Shine")}
    if (name.includes("Omega")) {name = name.replace("Omega", "Omni")}
    if (name.includes("Omega ")) {name = name.replace("Omega ", "Omni")}
    if (name.includes(" V-")) {name = name.replace(" V-", "Vee")}
    if (name.includes("V-")) {name = name.replace("V-", "Vee")}
    if (name.includes("Ofanimon")) {name = name.replace("Ofanimon", "Ophanimon")}
    if (name.includes("Yatagaramon")) {name = name.replace("Yatagaramon", "Crowmon")}
    if (name.includes("Valdurmon")) {name = name.replace("Valdurmon", "Varodurumon")}
    if (name.includes("Ravmon")) {name = name.replace("Ravmon", "Ravemon")}
    if (name.includes("Lady ")) {name = name.replace("Lady ", "Lady")}
    if (name.includes("Vamdemon")) {name = name.replace(/.*/, "Myotismon")}
    console.log(name)

    name = name.replace(/\(.*?\)/g, "");
    return name.trim()
}

export default translateName