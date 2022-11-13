import React, { useState, useEffect } from 'react';
import { Grid, Container, TextInput } from '@mantine/core'
import axios from 'axios'
import SmallCard from '../components/SmallCard'
import Links from '../components/Links'


const Main = () => {
    const [inp, setInp] = useState("")
    const [data, setData] = useState([])
    const [dataUser, setDataUser] = useState([])
    const [errorI, setErrorI] = useState(false)
    const [user, setUser] = useState()

    const Submit = () => {
        // inp.length === 24 ?
        //     axiosUser()
        //     :
        //     setErrorI(true)
    }

    useEffect(() => {
        if (inp.length > 3) {
            axiosUser()
        }
    }, [inp])
    console.log(inp)

    async function axiosUser() {
        try {
            const response = await
                axios.get('https://api.github.com/search/users', {
                    params: {
                        q: inp,
                        per_page: 10
                    }
                })
            console.log(response.data.items)
            setData(response.data.items)
        } catch (error) {
            console.error(error)
        }
    }

    async function GetRepasitory(v) {
        console.log(v)
        try {
            const response = await
                axios.get(`https://api.github.com/users/${v}/repos`)
            console.log(response.data)
            setDataUser(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const GetItem = (item) => {
        console.log(item)
        GetRepasitory(item)
    }

    console.log(inp.length)
    return (
        <div>
            <Container>
                <Grid>
                    <div style={{ marginTop: '20px', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid.Col span={4}>
                            <TextInput
                                type="text"
                                onChange={(e) => setInp(e.currentTarget.value)}
                                placeholder="ID"
                                error={errorI}

                            />
                            <div className='shadow-md'>
                                {
                                    data.map((item, index) => <li
                                        className='list-none p-2 hover:bg-gray-300 transition-all'
                                        onClick={() => GetItem(item.login)}
                                    >{item.login}</li>)
                                }
                            </div>
                        </Grid.Col>
                        <button
                            onClick={() => Submit()}
                            // style={{ height: '35px', border: '1px solid green' }}
                            className="rounded px-4 py-2 border border-black"
                        >
                            Log in
                        </button>

                    </div>
                </Grid>
                {
                    dataUser.map((item, index) => {
                        return (
                            <SmallCard item={item} key={index} />
                        )
                    })
                }
                <Links item />
            </Container>
        </div>
    );
};

export default Main;