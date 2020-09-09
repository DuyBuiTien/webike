export const cameras = [
    {
        "id": 82,
        "name": "Phát hiện đám đông (Nam Đinh)2",
        "functions": [
            {
                "id": 98,
                "type": "DamDong"
            },
            {
                "id": 105,
                "type": "TreoRao"
            }
        ],
        "location": "THPT Nguyen Khuyen",
        "lonlat": {
            "lon": 106.444615,
            "lat": 22.225396
        },
        "stream_url": "rtsp://aic:admin123@c3nk.dahuaddns.com:554/cam/realmonitor?channel=11&subtype=0",
        "m3u8_url": "https://stream.atoma.vn:58008/live/namdinh_stream_82/index.m3u8",
        "ward": 10
    },
    {
        "id": 83,
        "name": "Phát hiện đám đông (Nam Đinh)3",
        "functions": [
            {
                "id": 99,
                "type": "DamDong"
            },
            {
                "id": 106,
                "type": "TreoRao"
            }
        ],
        "location": "BV Thanh Pho",
        "lonlat": {
            "lon": 106.330296,
            "lat": 21.965128, 
        },
        "stream_url": "rtsp://aic:admin123@113.176.43.13:554/cam/realmonitor?channel=15&subtype=0",
        "m3u8_url": "https://stream.atoma.vn:58008/live/namdinh_stream_83/index.m3u8",
        "ward": 10
    },
    {
        "id": 84,
        "name": "Phát hiện đám đông (Nam Đinh)4",
        "functions": [
            {
                "id": 100,
                "type": "DamDong"
            },
            {
                "id": 107,
                "type": "TreoRao"
            }
        ],
        "location": "UBND Xuan Truong",
        "lonlat": {
            "lon": 106.434816,
            "lat": 21.692242, 
        },
        "stream_url": "rtsp://admin:TIEPDAN2017@ubndxuantruong.dahuaddns.com:554/cam/realmonitor?channel=6&subtype=0",
        "m3u8_url": "https://stream.atoma.vn:58008/live/namdinh_stream_84/index.m3u8",
        "ward": 10
    },
    {
        "id": 85,
        "name": "Phát hiện đám đông (Nam Đinh)5",
        "functions": [
            {
                "id": 101,
                "type": "DamDong"
            },
            {
                "id": 108,
                "type": "TreoRao"
            }
        ],
        "location": "BV Thanh Pho",
        "lonlat": {
            "lon": 106.900257,
            "lat": 21.748378, 
        },
        "stream_url": "rtsp://aic:admin123@113.176.43.13:554/cam/realmonitor?channel=7&subtype=0",
        "m3u8_url": "https://stream.atoma.vn:58008/live/namdinh_stream_85/index.m3u8",
        "ward": 10
    }
]

export const violates = [
    {
        "id": 12203,
        "time": "2020-09-04T10:06:15",
        "ward": "BV Thanh Pho",
        "description": "Phát hiện đám đông",
        "image_path": "Data\\NamDinh\\DamDong\\Atoma_Image\\83\\20\\09\\04\\100615328021",
        "video_path": "Data\\NamDinh\\DamDong\\Atoma_VideoDamDong\\83\\20\\09\\04\\100615328021\\100615.mp4",
        "camera": {
            "id": 83,
            "name": "Phát hiện đám đông (Nam Đinh)3",
            "location": "BV Thanh Pho",
            "lonlat": {
                "longitude": 106.656921,
                "latitude": 22.101375, 
            }
        }
    },
    {
        "id": 12159,
        "time": "2020-08-31T13:27:32",
        "ward": "UBND Tinh",
        "description": "Phát hiện xâm nhập ",
        "image_path": "Data\\NamDinh\\entry_behavior\\81\\2020\\08\\31\\132732538786",
        "video_path": null,
        "camera": {
            "id": 81,
            "name": "Phát hiện đám đông (Nam Đinh)1",
            "location": "UBND Tinh",
            "lonlat": {
                "longitude": 107.261179,
                "latitude": 21.655818, 
            }
        }
    },
    {
        "id": 12201,
        "time": "2020-09-04T06:30:57",
        "ward": "BV Thanh Pho",
        "description": "Phát hiện đám đông",
        "image_path": "Data\\NamDinh\\DamDong\\Atoma_Image\\83\\20\\09\\04\\063057998725",
        "video_path": "Data\\NamDinh\\DamDong\\Atoma_VideoDamDong\\83\\20\\09\\04\\063057998725\\063057.mp4",
        "camera": {
            "id": 83,
            "name": "Phát hiện đám đông (Nam Đinh)3",
            "location": "BV Thanh Pho",
            "lonlat": {
                "longitude": 106.776140,
                "latitude": 21.616349, 
            }
        }
    },
    {
        "id": 12182,
            "time": "2020-08-31T14:14:22",
            "ward": "UBND Tinh",
            "description": "Phát hiện xâm nhập ",
            "image_path": "Data\\NamDinh\\entry_behavior\\81\\2020\\08\\31\\141422235997",
            "video_path": null,
            "camera": {
            "id": 81,
            "name": "Phát hiện đám đông (Nam Đinh)1",
            "location": "UBND Tinh",
            "lonlat": {
                "longitude": 106.194746,
                "latitude": 21.793877, 
            }
        }
    },
    {
        "id": 12196,
            "time": "2020-09-03T08:27:09",
            "ward": "UBND Xuan Truong",
            "description": "Phát hiện đám đông",
            "image_path": "Data\\NamDinh\\DamDong\\Atoma_Image\\84\\20\\09\\03\\082709588280",
            "video_path": "Data\\NamDinh\\DamDong\\Atoma_VideoDamDong\\84\\20\\09\\03\\082709588280\\082709.mp4",
            "camera": {
            "id": 84,
            "name": "Phát hiện đám đông (Nam Đinh)4",
            "location": "UBND Xuan Truong",
            "lonlat": {
                "longitude": 106.603028,
                "latitude": 21.946952, 
            }
        }
    },
]