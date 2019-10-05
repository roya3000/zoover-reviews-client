import { List as AntList } from 'antd';
import React from 'react';
import Comment from './Comment';
/*
*         {
            "parents": [
                {
                    "id": "96e83a90-48da-4e81-9d06-7f1b76e5364e"
                }
            ],
            "id": "c9fa6d7b-a773-402e-b9cc-a800634484cf",
            "traveledWith": "FAMILY",
            "entryDate": 1252359116000,
            "travelDate": 1252359116000,
            "ratings": {
                "general": {
                    "general": 8
                },
                "aspects": {
                    "location": 9,
                    "service": 0,
                    "priceQuality": 9,
                    "food": 0,
                    "room": 0,
                    "childFriendly": 9,
                    "interior": 0,
                    "size": 0,
                    "activities": 0,
                    "restaurants": 0,
                    "sanitaryState": 0,
                    "accessibility": 0,
                    "nightlife": 0,
                    "culture": 0,
                    "surrounding": 0,
                    "atmosphere": 0,
                    "noviceSkiArea": 0,
                    "advancedSkiArea": 0,
                    "apresSki": 0,
                    "beach": 0,
                    "entertainment": 0,
                    "environmental": 0,
                    "pool": 0,
                    "terrace": 0
                }
            },
            "titles": {
                "nl": "perfecte vakantieplek"
            },
            "texts": {
                "nl": "14 dagen bungalowtent gehuurd, perfecte vakantie, weinig last van muggen, voor de kids (3,12,en 16) een paradijsje, nadeel bij de tenten van de touroperator is dat er geen luifel of partytent voorstaat, de plekken hebben weinig tot geen schaduw, dus zelf meenemen. Zeeeer schone toilet en doucheruimtes, zelfs voor de kleintjes een aparte ruimte."
            },
            "user": "M van Dam",
            "locale": "nl"
        },
*
*
* */


const listData:any = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    "entryDate": 1252359116000,
    "travelDate": 1252359116000,
    "titles": {
      "nl": "perfecte vakantieplek"
    },
    "texts": {
      "nl": "14 dagen bungalowtent gehuurd, perfecte vakantie, weinig last van muggen, voor de kids (3,12,en 16) een paradijsje, nadeel bij de tenten van de touroperator is dat er geen luifel of partytent voorstaat, de plekken hebben weinig tot geen schaduw, dus zelf meenemen. Zeeeer schone toilet en doucheruimtes, zelfs voor de kleintjes een aparte ruimte."
    },
    "user": "M van Dam",
    "locale": "nl"
  });
}

class Comments extends React.Component<any> {
  render() {
    return(
      <div>
        <AntList
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={listData}
          renderItem={(item: any) => (
            <AntList.Item key={item.title}>
              <Comment />
            </AntList.Item>
          )}
        />
      </div>
    );
  }
}

export default Comments;