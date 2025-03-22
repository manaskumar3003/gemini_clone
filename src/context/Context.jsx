import { createContext, use, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [resultData, SetResultData] = useState("");

  const deayPara = (index,nextWord)=>{
    setTimeout(function (){
        SetResultData(prev=>prev+nextWord);

    },75*index)
  }
  const newChat = ()=>{
    setLoading(false)
    setShowResult(false)
  }

  const onSent = async (prompt) => {

    SetResultData("");
    setLoading(true);
    setShowResult(true)
    let response;
    if (prompt !== undefined){
        response= await run(prompt);
        setRecentPrompt(prompt)
    }else{
        setPrevPrompts(prev=>[...prev,input])
        setRecentPrompt(input)
        response= await run(input)
    }

   
    let responseArray = response.split("*");
    let newResponse="";
    for(let i =0;i<responseArray.length;i++)
    {
        if(i===0 || i%2 !==1){
            newResponse+= responseArray[i];
        }
        else{
            newResponse+= "<b>"+responseArray[i]+"</b>"
        }
    }
    let newResponse2 = newResponse.split("*").join("</br>")
    let newresponseArray = newResponse2.split(" ");
    for(let i=0;i<newresponseArray.length;i++)
    {
        const nextWord = newresponseArray[i];
        deayPara(i,nextWord+" ")
    }
    setLoading(false);
    setInput("");






  };




  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    showResult,
    setShowResult,
    Loading,
    setLoading,
    resultData,
    SetResultData,
    newChat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
