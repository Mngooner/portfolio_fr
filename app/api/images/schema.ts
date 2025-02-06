import {z} from "zod";

const schema = z.object({
    url: z.string(),
    learnt: z.boolean(),
    name: z.string()
})

export default schema