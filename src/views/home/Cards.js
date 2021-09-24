import React from 'react'
import faker from 'faker'


import { Card, Image, Rating } from 'semantic-ui-react'

function Cards() {
    const contacts = new Array(20).fill(1).map(d => faker.helpers.createCard())
    console.log(contacts);
    let report = () => `https://picsum.photos/200/100?random=1${Math.random(0.4)}`
    contacts.forEach(d => d.src = report())
    return (
        <div style={{ display: 'grid', gridTemplateColumns: "repeat(4,24%)", justifyItems: 'center', gridGap: "1%", marginTop: '1vh', alignItems: 'center' }}>
            {contacts.map(d => {

                return <Card key={`key${d.name}`} >
                    <Image src={d.src} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{d.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{d.email}</span>
                        </Card.Meta>
                        <Card.Description>
                            {d.company.catchPhrase}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Rating icon='star' defaultRating={parseInt(Math.random() * 5)} maxRating={5} />
                    </Card.Content>
                </Card>
            })}

        </div>
    )
}

export default Cards
