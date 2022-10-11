// import { hero, services, facilities, sites, advantages } from "../data"
// const sectionArray = [ hero, services, facilities, sites, advantages]
// const sectionArrayNames = [ "hero", "services", "facilities", "sites", "advantages"]
// const wrapper = document.querySelector(".wrapper")


const sections = (array, names, append) => {
    names.forEach((names) => {
        const createSection = document.createElement("section")
        createSection.classList.add(names)
        wrapper.append(createSection)
        return createSection
    })
}

export default sections