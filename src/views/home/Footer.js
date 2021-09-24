import React from 'react'
import { Button, Icon, Input, Label } from 'semantic-ui-react';
function Footer() {
    return (
        <Label style={{ display: 'flex', justifyContent: 'space-around', width: "1200" }}>
            <Label>
                <Button>NEWSLETTER SIGN</Button>
                <Input iconPosition='left' placeholder='Enter your email'>
                    <Icon name='at' />
                    <input />
                </Input>
                <Button>Subscribe</Button>
            </Label>

            <Label>
                <Button color='facebook'> CONNECT US  </Button>
                <Button color='facebook'>
                    <Icon name='facebook' />
                </Button>
                <Button color='twitter'>
                    <Icon name='twitter' />
                </Button>

                <Button color='instagram'>
                    <Icon name='instagram' />
                </Button>
            </Label>
        </Label>
    )
}

export default Footer
