import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:8080"
});

export const getAllDiaryEntries=()=>{
    return client.get("/entries/find/all")
}

export const addNewDiaryEntry=(values)=>{
    return client.post("/entries/new",values);
}