import React from 'react'
import styled, { ThemeProvider, keyframes, css } from 'styled-components'
import { ThemeContext } from './ThemeContext'
import Theme from '../Theme.json'

export default function NavbarMobile() {
    var [theme, setTheme] = React.useContext(ThemeContext)
    var [showN, setShowN] = React.useState('0')
    var [heigthN, setHeightN] = React.useState('0vh')
    let [showCircle, setShowCircle] = React.useState(false);
    let [circleColor, setCircleColor] = React.useState(theme.colors.backgroundOp);
    var [themeAnimation, setThemeAnimation] = React.useContext(ThemeContext)
    React.useEffect(() => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "2")
            setTheme(Theme.theme2)
        } else {
            if (localStorage.getItem("theme") === "2") {
                setTheme(Theme.theme2)
            } else {
                setTheme(Theme.theme1)
            }
        }
    }, [])

    function navButton() {
        if (showN === '0') {
            setShowN('1')
            setHeightN('50vh')
        }
        else {
            setHeightN('0vh')
            setShowN('0')
        }
    }
    function toggleTheme() {
        if (!showCircle) {
            setShowCircle(true)
            setTimeout(() => {
                if (theme.name === "light") {
                    localStorage.setItem("theme", "2")
                    setTheme(Theme.theme2)
                }
                else {
                    localStorage.setItem("theme", "1")
                    setTheme(Theme.theme1)
                }
            }, 500);
            setTimeout(() => {
                setShowCircle(false)
                setCircleColor(theme.colors.background)
            }, 2000)
        }
    }
    return (
        <>
            {console.log(theme)}
            <ThemeProvider theme={theme}>
                <NavbarWraper>
                    <Nav>
                        <Logo width="117.775" height="47.307" viewBox="0 0 117.775 47.307">
                            <path id="Aryan" d="M1.75-10.57q.6,0,1.173.017T4.06-10.5q1.3-2.975,2.73-6.23t2.8-6.37q1.365-3.115,2.59-5.88t2.1-4.76q.315-.035.6-.053t.56-.017a3.825,3.825,0,0,1,2.538.665,2.223,2.223,0,0,1,.752,1.75q0,2.135-.14,5t-.332,6.055q-.193,3.185-.333,6.51t-.14,6.44q0,3.01.1,5.373T18.06,2.52q-.28.035-.56.052t-.56.018a3.134,3.134,0,0,1-2.222-.735A4.319,4.319,0,0,1,13.563-.193a13.616,13.616,0,0,1-.437-3.115q-.07-1.8-.07-3.938Q11.55-7.14,9.363-7T5.04-6.755q-1.19,2.52-2,4.27T2.03-.175a3.537,3.537,0,0,1-.717,1.26,1.717,1.717,0,0,1-1.207.35q-.6,0-.6-.56A3.437,3.437,0,0,1-.28.035q.21-.63.6-1.61T1.243-3.85q.543-1.295,1.173-2.835-.385.035-.77.035h-.7a2.259,2.259,0,0,1-1.383-.4,3,3,0,0,1-.858-.98A4.555,4.555,0,0,1-1.75-9.258,5.47,5.47,0,0,1-1.89-10.4q.84-.07,1.768-.122T1.75-10.57ZM13.055-9.345q.07-4.375.4-8.732t.823-9.153q-.84,2-1.785,4.165t-1.925,4.34q-.98,2.17-1.977,4.3t-1.908,4.1q1.61.175,3.15.42T13.055-9.345ZM21.42-.6a31.9,31.9,0,0,0,2.222-2.52,22.747,22.747,0,0,0,1.785-2.643q.823-1.418,1.61-3.132t1.663-3.95a3.241,3.241,0,0,1-1.523-1.243,3.065,3.065,0,0,1-.4-1.522,4.078,4.078,0,0,1,.262-1.365,7.192,7.192,0,0,1,.665-1.382,4.562,4.562,0,0,1,.892-1.068,1.452,1.452,0,0,1,.91-.42,3.351,3.351,0,0,1,.735.122,7.958,7.958,0,0,1,.98.315,4.527,4.527,0,0,1,.858.438q.367.245.368.49a6.522,6.522,0,0,1-.315,1.5q-.315,1.085-.805,2.555a15.311,15.311,0,0,0,1.592.315q.753.105,1.417.21a2.156,2.156,0,0,1,.84.35,3.708,3.708,0,0,1,.752.665,4.269,4.269,0,0,1,.56.823,1.74,1.74,0,0,1,.228.787,3.976,3.976,0,0,1-.455,1.505q-.455.98-.98,2.222T34.3-4.865a9.559,9.559,0,0,0-.455,2.9v.42a3.231,3.231,0,0,0,.035.455,2.365,2.365,0,0,0,1.1-.4,7.393,7.393,0,0,0,1.505-1.26A19.7,19.7,0,0,0,38.237-4.9a21.717,21.717,0,0,0,1.8-3.08.564.564,0,0,1,.56-.28,1.152,1.152,0,0,1,.753.315.632.632,0,0,1,.192.77A18.812,18.812,0,0,1,40.215-4.6a21.977,21.977,0,0,1-1.838,2.59A12.355,12.355,0,0,1,36.313,0a3.441,3.441,0,0,1-2.048.8A3.253,3.253,0,0,1,32.69.385,5.267,5.267,0,0,1,31.325-.683,5.372,5.372,0,0,1,30.38-2.1a3.622,3.622,0,0,1-.35-1.5,10.883,10.883,0,0,1,.1-1.467,13.7,13.7,0,0,1,.37-1.736q.263-.962.7-2.135t1.068-2.642q-.42-.14-.858-.28t-.927-.315q-.665,1.75-1.47,3.622T27.4-5.04q-.8,1.645-1.557,2.9a9.743,9.743,0,0,1-1.312,1.82,1.662,1.662,0,0,1-1.225.49A2.9,2.9,0,0,1,21.42-.6ZM51.31.875q.21-1.5.42-2.94t.42-2.555A16.689,16.689,0,0,1,51.1-3.273a11.531,11.531,0,0,1-1.12,1.137,5.962,5.962,0,0,1-1.12.788,2.309,2.309,0,0,1-1.085.3,3.031,3.031,0,0,1-1.1-.21,5.607,5.607,0,0,1-1.05-.543,5.7,5.7,0,0,1-.91-.735q-.4-.4-.717-.753A1.879,1.879,0,0,1,43.54-4.1a3.452,3.452,0,0,1-.105-.84A19.888,19.888,0,0,1,43.7-7.98q.262-1.68.7-3.43t.963-3.465q.525-1.715,1.05-3.185a3.332,3.332,0,0,1,.875-.1q.595,0,1.138.052a3.531,3.531,0,0,1,.945.21,1.631,1.631,0,0,1,.647.438,1.076,1.076,0,0,1,.245.735A6.355,6.355,0,0,1,49.9-15.01q-.367,1.155-.84,2.852t-.93,3.968a42.052,42.052,0,0,0-.665,5.11A7.455,7.455,0,0,0,49.6-4.988a20.219,20.219,0,0,0,1.96-3.045,37.19,37.19,0,0,0,1.8-3.955q.858-2.187,1.628-4.637.14-.595.262-.98t.193-.7a8.973,8.973,0,0,1,1.4.1,4.627,4.627,0,0,1,1.173.333,2.555,2.555,0,0,1,.822.56,1.15,1.15,0,0,1,.315.823,4.835,4.835,0,0,1-.175,1.172q-.175.683-.63,2.048-.525,1.575-.875,2.87t-.647,2.5q-.3,1.208-.525,2.468T55.79-2.7l-.1,1.05a18.012,18.012,0,0,0,2.852-2.468A22.329,22.329,0,0,0,61.39-7.98a.516.516,0,0,1,.49-.245,1.372,1.372,0,0,1,.823.3.52.52,0,0,1,.228.682A19.213,19.213,0,0,1,61.409-4.67a15.942,15.942,0,0,1-1.7,2.013A16.158,16.158,0,0,1,57.732-.98Q56.665-.21,55.4.6q-.35,2.73-.875,5.075A18,18,0,0,1,53.16,9.718,7.666,7.666,0,0,1,51.077,12.4a4.847,4.847,0,0,1-3.1.98,5.306,5.306,0,0,1-1.96-.4A6.493,6.493,0,0,1,44.2,11.89a6.385,6.385,0,0,1-1.33-1.54,3.4,3.4,0,0,1-.525-1.8,3.229,3.229,0,0,1,.858-2.1,12.229,12.229,0,0,1,2.2-1.987,31.127,31.127,0,0,1,2.9-1.855Q49.875,1.715,51.31.875Zm-4.2,10.64a3.458,3.458,0,0,0,1.59-1.382,10.5,10.5,0,0,0,1.085-2.24,19.8,19.8,0,0,0,.7-2.485q.262-1.243.4-2.153-.98.6-2.065,1.278A19.123,19.123,0,0,0,46.847,5.95a8.53,8.53,0,0,0-1.47,1.523A2.676,2.676,0,0,0,44.8,9.065a1.85,1.85,0,0,0,.63,1.347,6.077,6.077,0,0,0,1.68,1.1Zm20.86-27.86a7.032,7.032,0,0,1,1.173-1.312,2.219,2.219,0,0,1,1.382-.368,4.655,4.655,0,0,1,1.05.14q.6.14,1.19.333t1.1.4q.507.21.787.35a4.025,4.025,0,0,1,1.085.753,6.673,6.673,0,0,1,.945,1.173q.42-.945.683-1.54t.42-.945q.158-.35.262-.542t.175-.3a2.4,2.4,0,0,1,1.085.262,3.271,3.271,0,0,1,.91.665,3.641,3.641,0,0,1,.63.892,2.174,2.174,0,0,1,.245.98,1.4,1.4,0,0,1-.053.368q-.052.192-.262.752-.42,1.155-.893,2.52t-.84,2.87q-.368,1.505-.613,3.115A21.144,21.144,0,0,0,78.19-2.59a6.1,6.1,0,0,0,.21,1.54A3.41,3.41,0,0,0,79.677-2a14.287,14.287,0,0,0,1.365-1.75q.683-1.015,1.365-2.135t1.243-2.1a.578.578,0,0,1,.525-.28,1.232,1.232,0,0,1,.825.32.553.553,0,0,1,.193.7q-.56,1.19-1.383,2.625a28.576,28.576,0,0,1-1.732,2.677A15.954,15.954,0,0,1,80.29.14a2.447,2.447,0,0,1-1.575.84A3.049,3.049,0,0,1,77.507.718a4.927,4.927,0,0,1-1.155-.7,5.568,5.568,0,0,1-.963-1,4.178,4.178,0,0,1-.63-1.19,6.483,6.483,0,0,1-.3-1.5q-.049-.733-.049-1.5v-.035q-.525.98-1.173,1.978a16.1,16.1,0,0,1-1.347,1.8,9.187,9.187,0,0,1-1.4,1.33A2.25,2.25,0,0,1,69.16.42a2.9,2.9,0,0,1-.63-.07,3.322,3.322,0,0,1-.49-.14,5.3,5.3,0,0,1-2.748-2.24,7.156,7.156,0,0,1-.717-3.36,18.856,18.856,0,0,1,.963-6A18.668,18.668,0,0,1,67.97-16.345ZM68.95-1.4a16.348,16.348,0,0,0,2.135-2.362A25.608,25.608,0,0,0,72.817-6.44q.788-1.4,1.435-2.852t1.278-2.922a12.547,12.547,0,0,1-1.173-1.767,7.626,7.626,0,0,0-1.592-1.943,16.689,16.689,0,0,0-1.645,2.607,22.381,22.381,0,0,0-1.33,3.15,24.343,24.343,0,0,0-.875,3.378A18.219,18.219,0,0,0,68.6-3.5a7.68,7.68,0,0,0,.07,1.015A4.962,4.962,0,0,0,68.95-1.4ZM86.66-3.5a20.888,20.888,0,0,1,.3-3.2q.3-1.872.7-3.85t.84-3.85q.437-1.873.717-3.2a4.518,4.518,0,0,1,2.258.525,1.673,1.673,0,0,1,.927,1.54q0,.1-.07.613t-.175,1.208q-.1.7-.245,1.487t-.245,1.453a26.336,26.336,0,0,1,1.66-2.826,17.345,17.345,0,0,1,1.838-2.293,9.141,9.141,0,0,1,1.89-1.54,3.525,3.525,0,0,1,1.785-.56,2.159,2.159,0,0,1,.928.245,3.957,3.957,0,0,1,.963.665,4.111,4.111,0,0,1,.77.963,2.233,2.233,0,0,1,.315,1.137,13.446,13.446,0,0,1-.245,2.538q-.245,1.277-.56,2.625t-.56,2.765a17.344,17.344,0,0,0-.245,2.957,6.655,6.655,0,0,0,.088,1.155,4.41,4.41,0,0,0,.368,1.085,8.593,8.593,0,0,0,1.365-1.208A17.163,17.163,0,0,0,103.3-4.62a19.61,19.61,0,0,0,1.12-1.715q.507-.875.893-1.645a.532.532,0,0,1,.525-.28,1.3,1.3,0,0,1,.805.3.56.56,0,0,1,.21.717q-.56,1.225-1.3,2.555a22.921,22.921,0,0,1-1.54,2.432,10.6,10.6,0,0,1-1.645,1.82A2.5,2.5,0,0,1,100.8.28a4.036,4.036,0,0,1-1.89-.455,5.368,5.368,0,0,1-1.523-1.173,5.679,5.679,0,0,1-1.015-1.575A4.284,4.284,0,0,1,96-4.62a24.951,24.951,0,0,1,.3-3.885q.3-1.89.647-3.378t.648-2.485a6.468,6.468,0,0,0,.3-1.243,4.835,4.835,0,0,0-1.732,1.3,14.3,14.3,0,0,0-1.645,2.258,26.863,26.863,0,0,0-1.47,2.835,31.318,31.318,0,0,0-1.173,3.01,25.991,25.991,0,0,0-.77,2.835,11.456,11.456,0,0,0-.28,2.258,1.59,1.59,0,0,1-.227.98,1.013,1.013,0,0,1-.823.28A3.593,3.593,0,0,1,88.183-.24,2.841,2.841,0,0,1,86.94-1.43a2.288,2.288,0,0,1-.245-.963Q86.66-2.975,86.66-3.5ZM110.705.28q.175-1.505.472-2.993T111.9-5.67a10.894,10.894,0,0,1,2.87.752,1.657,1.657,0,0,1,1.01,1.628,2.911,2.911,0,0,1-.3,1.155,5.9,5.9,0,0,1-.787,1.278,4.937,4.937,0,0,1-1.12,1.033,2.307,2.307,0,0,1-1.3.42,4.471,4.471,0,0,1-.84-.088,2.89,2.89,0,0,1-.728-.228Z" transform="translate(1.941 33.878)" fill="#4b4b4b" stroke="#4b4b4b" strokeWidth="0.1" />
                        </Logo>
                        <IconHolder>
                            <Link onClick={toggleTheme}>
                                {/* <Dark width="24.372" height="27" viewBox="0 0 24.372 27">
                                    <path id="moon-solid" d="M39.711,25a12.476,12.476,0,0,0,9.71-4.629.586.586,0,0,0-.565-.945A9.792,9.792,0,0,1,42.178,1.294.586.586,0,0,0,41.995.209,12.5,12.5,0,1,0,39.711,25Z" transform="translate(-26.211 1)" fill="none" stroke="#000" strokeWidth="2" />
                                </Dark > */}
                                <Dark
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="transparent"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ transform: "rotate(40deg) scale(1.2)" }}
                                >
                                    {themeAnimation.name === "Dark" ?
                                        <mask id="mask">
                                            <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                            <circle cx="12" cy="2" r="9" fill="#191a1c" />
                                        </mask>
                                        : <> </>}
                                    <circle fill={theme.colors.backgroundOp} cx="12" cy="12" r={themeAnimation.name === "Dark" ? "9" : "5"} mask="url(#mask)" />
                                    {themeAnimation.name !== "Dark" ? 
                                    <g stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                                        <line x1="12" y1="1" x2="12" y2="3" />
                                        <line x1="12" y1="21" x2="12" y2="23" />
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                        <line x1="1" y1="12" x2="3" y2="12" />
                                        <line x1="21" y1="12" x2="23" y2="12" />
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                    </g>
                                    : <></>}
                                </Dark>
                            </Link>
                            <Link onClick={navButton}>
                                <Menu width="23.689" height="25" viewBox="0 0 23.689 25">
                                    <path id="bars-solid" d="M.846,64.592h22a.946.946,0,0,0,.846-1.02V61.02A.946.946,0,0,0,22.843,60h-22A.946.946,0,0,0,0,61.02v2.551A.946.946,0,0,0,.846,64.592Zm0,10.2h22a.946.946,0,0,0,.846-1.02V71.224a.946.946,0,0,0-.846-1.02h-22A.946.946,0,0,0,0,71.224v2.551A.946.946,0,0,0,.846,74.8Zm0,10.2h22a.946.946,0,0,0,.846-1.02V81.429a.946.946,0,0,0-.846-1.02h-22A.946.946,0,0,0,0,81.429V83.98A.946.946,0,0,0,.846,85Z" transform="translate(0 -60)" fill="#4b4b4b" />
                                </Menu>
                            </Link>
                            <AnimateCircle show={showCircle} col={circleColor}>
                            </AnimateCircle>
                        </IconHolder>
                        <NavLinks className='navlink' showN={showN} heightN={heigthN}>
                            <Li onClick={navButton} showN={showN}><a href='#home' style={{ color: theme.colors.primaryFont }}>HOME</a></Li>
                            <Li onClick={navButton} showN={showN}><a href='#about' style={{ color: theme.colors.primaryFont }}>ABOUT</a></Li>
                            <Li onClick={navButton} showN={showN}><a href='#projects' style={{ color: theme.colors.primaryFont }}>PROJECTS</a></Li>
                            <Li onClick={navButton} showN={showN}><a href='#skills' style={{ color: theme.colors.primaryFont }}>SKILLS</a></Li>
                            <Li onClick={navButton} showN={showN}><a href='#contact' style={{ color: theme.colors.primaryFont }}>CONTACT</a></Li>
                        </NavLinks>
                    </Nav>
                </NavbarWraper>
            </ThemeProvider>
        </>
    )
}
let animation = keyframes`
    50% {opacity: 1}
    99% {transform: scale(150); opacity: 0.9: 
    100% {opacity:0;transform: scale(1)}
`
const NavbarWraper = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.background}95;
    z-index: 1000;
    backdrop-filter: blur(10px);
`
const Nav = styled.div`
    max-width: 1800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    margin: auto;
`
const AnimateCircle = styled.div`
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-decoration: none;
    position: absolute;
    right: 100px;
    width: 27px;
    height: 27px;
    /* transform: scale(50); */
    /* backdrop-filter: invert(50);     */
    mix-blend-mode: normal;
    background: ${props => props.col};
    opacity: 0;
    /* isolation: isolate; */
    /* overflow: hidden; */
    animation:${props => props.show ? css`${animation} 2s ease` : ""};
    /* animation: ease 2s ${animation} infinite;
    animation-play-state: ${props => props.show ? "running" : "paused"}; */
    /* z-index: 1000; */
    /* transform-origin: center; */
`
const Logo = styled.svg`
    margin-left: 25px;
    padding-top: 2%;
    padding-bottom: 1%;
    height: 40px;
    width: auto;
    path{
        fill: ${props => props.theme.colors.primaryFont};
        stroke: ${props => props.theme.colors.primaryFont};
    }
    @media (min-width: 1024px) {
        padding-top: 1%;
    }
`
const IconHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */
`
const Dark = styled.svg`
    margin: 6px;
    path{
        fill: ${props => props.theme.colors.primaryFont};
        stroke: ${props => props.theme.colors.primaryFont};
    }
    z-index:1;
`
const Menu = styled.svg`
    margin:6px;
    path{
        fill: ${props => props.theme.colors.primaryFont};
        stroke: ${props => props.theme.colors.primaryFont};
    }
`
const Link = styled.a`
    -webkit-tap-highlight-color: transparent;
    margin-right:25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-decoration: none;
    &:active{
        background-color: ${props => props.theme.colors.btnActive};
    }
`

const Li = styled.li`
    transition: opacity 0.4s ease;
    opacity: ${props => props.showN};
    a{
        pointer-events: ${props => props.showN === '0' ? 'none' : "all"};
    }
`
const NavLinks = styled.ul`
        position: absolute;
        top: 80px;
        box-shadow: 3px 1px 10px 0 ${props => props.theme.colors.boxShadowColor};
        left: 50%;
        list-style: none;
        transform: translate(-50%,0);
        display: flex;
        opacity: ${props => props.showN};
        flex-direction: column;
        background-color: ${props => props.theme.colors.navColor};
        align-items: center;
        justify-content: space-around;
        width: 90%;
        height: ${props => props.heightN};
        border-radius: 20px;
        transition: height 0.5s ease-in-out, opacity 0.6s ease;
`