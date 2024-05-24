import OpenAI from "openai";

interface Options{
    threadId:string
    assistantId?:string

}
export const createRunUseCase = async (openai: OpenAI, options:Options) => {

    const {threadId, assistantId='asst_Ba3zr3kbBeNEe2XqQYG96V1X'} = options;

    const run = await openai.beta.threads.runs.create(threadId,{
        assistant_id:assistantId
    })

    console.log(run);
    return run;

}