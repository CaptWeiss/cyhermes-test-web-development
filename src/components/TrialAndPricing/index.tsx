import React, { useState } from 'react'
import {PriceFormat} from '../formatAmt';
import './index.css';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

interface IModules {
    id: string,
    name: string,
    icon: string,
    activeIcon: string,
}

const modules: IModules[] = [
    {
        id: 'A101',
        name: 'Governance Portal',
        activeIcon: '/icons/GovernancePortal.png',
        icon: 'icons/GovernancePortal-light.png'
    },{
        id: 'A102',
        name: 'Corporate Universe',
        activeIcon: '/icons/CorporateUniverse.png',
        icon: 'icons/CorporateUniverse-light.png'
    },{
        id: 'A103',
        name: 'Contract Domain',
        activeIcon: '/icons/ContractDomain.png',
        icon: '/icons/ContractDomain-light.png',
    },{
        id: 'A104',
        name: 'Investor Relations',
        activeIcon: '/icons/InvestorRelations.png',
        icon: '/icons/InvestorRelations-light.png'
    },{
        id: 'A105',
        name: 'Dispute Portfolio',
        activeIcon: '/icons/DisputePortfolio.png',
        icon: '/icons/DisputePortfolio-light.png'
    },{
        id: 'A106',
        name: 'Minute Book',
        activeIcon: '/icons/MinuteBook.png',
        icon: '/icons/MinuteBook-light.png'
    },{
        id: 'A107',
        name: 'Reporting Tool',
        activeIcon: '/icons/ReportingTool.png',
        icon: '/icons/ReportingTool-light.png'
    },{
        id: 'A108',
        name: 'Attendance Register',
        activeIcon: '/icons/AttendanceRegister.png',
        icon: '/icons/AttendanceRegister-light.png'
    }
]

const useStyles = makeStyles({
    root: {
        width: '3em',
        height: '3em'
    },
});

const TrialAndPricing = () => {
    const [selectedModuleID, setSelectedModuleID] = useState<string>('A101') ;
    const c = useStyles() ;

    const SlideInput = withStyles({
        root: {
            color: '#4982ff',
            height: 8,
        },
        thumb: {
            height: 18,
            width: 18,
            backgroundColor: '#fff',
            border: '6px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
                boxShadow: 'inherit',
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
        },
        track: {
            height: 5,
            borderRadius: 4,
        },
        rail: {
            height: 3,
            borderRadius: 4,
        },
    })(Slider);

    const marks = [
        {
            value: 0,
            label: "0"
        },{
            value: 1000,
            label: ">1000"
        }
    ]

    const includes = ['25 Users', 'All modules and features', 'Unlimited commitees', 'Unlimited roles creation'] ;

    return (
        <div className='container' >

            <div className='heading' >
                <div className='wrapper11' >
                    <p id='greetings' >Hey, Terry</p>
                    <h3>Start your <span>30 days</span> Trial </h3>
                    <p id='info' >Select your preferred package below</p>
                </div>
                <div className='wrapper12' >
                    <p id='symbol' >NGN</p>
                    <p id='amt' >{PriceFormat.format(1999999)}</p>
                    <p id='details' >Total <span>(EXCLUDES VAT)</span> </p>
                </div>
            </div>

            <div className='cards' >
                <div className='floating-card' >
                    <div>
                        <p>Start From</p>
                        <p id='symbol' >NGN</p>
                        <p id='amt' >{PriceFormat.format(5999999.99)}</p>
                        <p>per annum</p>
                    </div>
                    <div>
                        <h3>Premium</h3>
                        <p id='users-count' >100 Users <span>.</span> All Modules </p>
                    </div>
                </div>
                
                <div className='card' >
                    <CheckCircleIcon classes={{root:c.root}} className='check-badge' />
                    <div>
                        <h3>Basic</h3>
                        <p> <span>30 days trials</span> on our premium app features and features </p>
                    </div>
                    <div>
                        <p id='includes' >INCLUDES</p>
                        <ul>
                            {
                                includes.map((val,idx) => (
                                    <li key={`${val}${idx}`} >
                                        {val}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className='user-slider' >
                <div>
                    <p>Add more users</p>
                    <p> NGN{PriceFormat.format(99999)} <span>per user</span> </p>
                </div>
                <div>
                    <SlideInput max={1000} marks={marks} valueLabelDisplay="auto" aria-label="slide input" defaultValue={100} />
                </div>
            </div>

            <div className='all-modules' >
                <div className='header-wrapper' >
                    <p>ALL MODULES</p>
                </div>
                <div className='modules-grid' >
                    {
                        modules.map(module => {
                            return (
                                <div className={selectedModuleID===module.id?'active':''} key={module.id} id={module.id} onClick={ e => {setSelectedModuleID(e.currentTarget.id)}} >
                                    <img className={'img-size'} src={selectedModuleID===module.id?module.activeIcon:module.icon } alt={module.id} />
                                    <p>{module.name}</p>
                                    {selectedModuleID === module.id && <div className='infoIcon'><InfoIcon/></div>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='action-area' >
                <a href="/#">Go Back</a>
                <button >Continue</button>
            </div>

        </div>
    )
}

export default TrialAndPricing ;
