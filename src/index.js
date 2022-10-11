import sections from "./components/sections"

import { hero, services, facilities, sites, advantages } from "./data"
const sectionArray = [ hero, services, facilities, sites, advantages]
const sectionArrayNames = [ "hero", "services", "facilities", "sites", "advantages"]
const wrapper = document.querySelector(".wrapper")


const section = sections()

