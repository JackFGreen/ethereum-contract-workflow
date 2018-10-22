import React from 'react'
import Button from '@material-ui/core/Button'

import Layout from '../components/Layout'

class Index extends React.Component {
    render() {
        return (
            <Layout>
                <Button variant="contained" color="primary">Welcome to Ethereum ICO DApp!</Button>
            </Layout>
        )
    }
}

export default Index
