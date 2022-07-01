import { comment } from "./apiLesion";

export default function handleComment(id, text, lesions, setLesions) {
    comment(id, text)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}