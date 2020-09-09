import axios from 'axios'

const instance = axios.create();

export const config = {
    "wso2link": "https://api.namdinh.gov.vn/",
    "beartoken": "76faf6a5-b128-3a1e-b56b-4dc290239587",
    "api": 
        [
            {
                "api": "APIKNTCDieuHanh",
                "site": "kntc"
            },
            {
                "api": "DVCDieuHanh",
                "site": "mcdt"
            },
            {
                "api": "pakn",
                "site": "pakn"
            },
            {
                "api": "cddh",
                "site": "cddh"
            },
            {
                "api": "APIQLCH",
                "site": "tlch"
            },
            {
                "api": "APIQLCB",
                "site": "qlcb"
            },
            {
                "api": "bc",
                "site": "ktxh"
            },
        ],
    "getallAPI":"LayDanhSachAPIDashboard",
    "getDataBlock":"LayDuLieuThongKe",    
    "getDataHighlight":"LayNhacViecDashboard",
    "getDataTable": "LayDanhSachDuLieu"
};

export const APIGiamSat = [
    {
        "api": "APIKNTCDieuHanh",
        "site": "kntc"
    },
    {
        "api": "pakn",
        "site": "pakn"
    },
    {
        "api": "cddh",
        "site": "cddh"
    },
    {
        "api": "bc",
        "site": "ktxh"
    },
]


export const requestGET = async(URL) => {
    return await instance({
        method: 'GET',
        url: URL,
        timeout: 15000,
        withCredentials: true,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}

export const requestGET2 = async(URL) => {
    return await instance({
        method: 'GET',
        url: URL,
        timeout: 15000
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}


export const requestPOST = async(URL, data) => {
    return await instance({
        method: 'POST',
        url: URL,
        data: data,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}

export const requestPOSTWSO2 = async(URL, data) => {
    return await instance({
        method: 'POST',
        headers: { Authorization: `Bearer ${config.beartoken}` },
        url: URL,
        data: data,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}

export const requestPOSTFD = async(URL, data) => {
    return await instance({
        method: 'POST',
        url: URL,
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: data,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}

export const requestPOSTFCM = async(URL, data) => {
    return await instance({
        method: 'POST',
        headers: { Authorization: `key=AAAADtI1XrA:APA91bGK-4oJmFKAf7TPryTCnPATAOO2MswE_FC1bvFwgc1sgKpEXXf8cHejF-o-I518ZD-b9fTSQa5zasznLLs5pXNWFOU44ePZ8WiU3aeFrbn69qkT3gNtB-gBDurLDz6jJESzKfw9` },
        url: URL,
        data: data,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}