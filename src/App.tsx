import React from 'react'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import { BucketList } from './components/bucket/BucketList'
function App() {
    return (
        <Layout>
            <Routes>
                <Route>
                    <Route path='/getBuckets' element={<BucketList />}></Route>
                </Route>
            </Routes>
        </Layout>
    )
}

export default App
