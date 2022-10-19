import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card } from 'reactstrap'
import Alltabs from './Alltabs'

const SearchTab = () => {
    const [active, setActive] = useState('1')

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <React.Fragment>
            <Card className='p-2'>
                <Nav pills className='justify-content-center' tabs>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '1'}
                            onClick={() => {
                                toggle('1')
                            }}
                        >
                            All
                        </NavLink>
                    </NavItem>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '2'}
                            onClick={() => {
                                toggle('2')
                            }}
                        >
                            People
                        </NavLink>
                    </NavItem>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '3'}
                            onClick={() => {
                                toggle('3')
                            }}
                        >
                            BizPage
                        </NavLink>
                    </NavItem>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '4'}
                            onClick={() => {
                                toggle('4')
                            }}
                        >
                            Groups
                        </NavLink>
                    </NavItem>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '5'}
                            onClick={() => {
                                toggle('5')
                            }}
                        >
                            Shotz
                        </NavLink>
                    </NavItem>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '6'}
                            onClick={() => {
                                toggle('6')
                            }}
                        >
                            Images
                        </NavLink>
                    </NavItem>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '7'}
                            onClick={() => {
                                toggle('7')
                            }}
                        >
                            Podcast
                        </NavLink>
                    </NavItem>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '8'}
                            onClick={() => {
                                toggle('8')
                            }}
                        >
                            #Tags
                        </NavLink>
                    </NavItem>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '9'}
                            onClick={() => {
                                toggle('9')
                            }}
                        >
                            Poll
                        </NavLink>
                    </NavItem>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '10'}
                            onClick={() => {
                                toggle('10')
                            }}
                        >
                            Videos
                        </NavLink>
                    </NavItem>
                    <NavItem className='NavItem'>
                        <NavLink
                            active={active === '11'}
                            onClick={() => {
                                toggle('11')
                            }}
                        >
                            Recommendation
                        </NavLink>
                    </NavItem>

                </Nav>
            </Card>
            <div className='mt-3'>
                <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId='1'>
                        <Alltabs />
                    </TabPane>
                </TabContent>
            </div>
        </React.Fragment>
    )
}
export default SearchTab