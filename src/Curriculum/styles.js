import styled from 'styled-components'

export const ContainerStyle = styled.div`
    font-weight: 400;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    font-family: "Roboto", sans-serif;
    color: #545E6C;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background: ${props => props.theme.color3};
    margin: 0 auto;
    position: relative;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    max-width: 794px;
    max-height: 1122px;
    margin-top: 3rem;
    margin-bottom: 3rem;

    /* max-width: 960px; */

    li:last-child {
        margin-bottom: 0;
    }

    li::marker {
        color: ${props => props.theme.color3};
    }

    li > span {
        color: rgba(255, 255, 255, 0.6);
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    svg {
        overflow: visible;
        width: 1em;
        height: 1em;
        display: inline-block;
    }
`

//------------------------------------------------------------------------------------------------------


export const SidebarStyle = styled.section`
    background: ${props => props.theme.color3};
    position: absolute;
    right: 0;
    width: 240px;
    height: 100%;
    min-height: 800px;
    color: #fff;
    font-weight: bold;

    h2 {
        margin-top: 0;
    }
`


export const ProfileStyle = styled.article`
    padding: 50px 30px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    color: #fff;

    h2 {
        font-size: 32px;
        font-weight: 900;
        margin-top: 0;
        margin-bottom: 10px;
        text-transform: none;
    }

    .photo {
        width: 7rem;
        height: 7rem;
        background-size: 100%;
        background-position-y: 30%;
        margin: 0 auto 0 auto;
        margin-bottom: 15px;
    }

    .tagline {
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
    }
`
export const ContactStyle = styled.article`
    padding: 1.5rem 1.25rem;
    padding-top: 50px;

    ul {
        padding-left: 0;
        list-style: none;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    svg {
        margin-right: 5px;
        font-size: 18px;
        vertical-align: middle;
    }

    li {
        margin-bottom: 15px;
    }

`
export const LanguagesStyle = styled.article`
    padding: 1.5rem 1.25rem;

    ul {
        padding-left: 0;
        list-style: none;
    }

    li {
        margin-bottom: 15px;
    }
    svg {
        margin-right: 5px;
        position: relative;
        top: 3px;
    }
`


export const StatisticsStyle = styled.article`
    padding: 1.5rem 1.25rem;

    .item {
        margin-bottom: 15px;
        overflow: hidden;

        h3 {
            font-size: 14px;
            margin-top: 0;
            margin-bottom: 12px;
        }

        .level-bar {
            height: 12px;
            background: #d1d1d1;
            border-radius: 2px;
            -moz-background-clip: padding;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
            display: flex;
            overflow: hidden;
            font-size: .75rem;

            div {
                background: ${props => props.theme.color2};
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                transition: width .6s ease;
            }
        }
    }
    svg {
        margin-right: 5px;
        position: relative;
        top: 3px;
    }
`
export const SoftSkillsStyle = styled.article`
    padding: 1.5rem 1.25rem;

    .item {
        margin-bottom: 15px;
        overflow: hidden;

        h3 {
            font-size: 14px;
            margin-top: 0;
            margin-bottom: 12px;
        }


        .level-bar {
            height: 12px;
            background: #d1d1d1;
            border-radius: 2px;
            -moz-background-clip: padding;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
            display: flex;
            overflow: hidden;
            font-size: .75rem;

            div {
                background: ${props => props.theme.color2};
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                transition: width .6s ease;
            }
        }
    }
    svg {
        margin-right: 5px;
        position: relative;
        top: 3px;
    }
`


//--------------------------------------------------------------------------------------------------------------

export const MainStyle = styled.section`
    background: #fff;
    padding: 30px;
    padding-right: 300px;
    padding-bottom: 70px;

    .time {
        position: absolute;
        right: 0;
        top: 2px;
        color: ${props => props.theme.color1};
    }

    ul {
        padding-left: 2rem;
    }

    .company {
        margin-bottom: 10px;
        color:${props => props.theme.color1};
        padding-left: 1rem;
    }

    .upper-row {
        margin-bottom: 0;
        position: relative;
        overflow: hidden;
        display: flex;
        
    }

    h3 {
        color: ${props => props.theme.color5};
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 500;
        padding-left: 1rem;
        max-width: calc(100% - 2rem);
    }

    li {
        margin-bottom: 0.5rem;
    }
`


export const EducationStyle = styled.article`
    margin-bottom: 40px;

    span {
        width: 30px;
        height: 30px;
        margin-right: 8px;
        display: inline-flex;
        color: #fff;
        border-radius: 50%;
        -moz-background-clip: padding;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        background: ${props => props.theme.color4};
        text-align: center;
        font-size: 16px;
        position: relative;
        top: 0px;
        align-items: center;
        justify-content: center;
    }

    h3 {
        padding-left: 1rem;
    }

    h2 {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 500;
        color: ${props => props.theme.color4};
        position: relative;
        margin-top: 0;
        margin-bottom: 20px;
    }

    .item {
        margin-bottom: 15px;
        position: relative;
    }

    .item:last-child {
        margin-bottom: 0;
    }
`

export const SummaryStyle = styled.article`
    margin-bottom: 40px;
    
    span {
        width: 30px;
        height: 30px;
        margin-right: 8px;
        display: inline-flex;
        color: #fff;
        border-radius: 50%;
        -moz-background-clip: padding;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        background: ${props => props.theme.color4};
        text-align: center;
        font-size: 16px;
        position: relative;
        top: 0px;
        align-items: center;
        justify-content: center;
    }

    
    .company {
        font-weight: 700;
    }
    .upper-row {
        .job-title {
            font-weight: 700;
        }
    }

    h2 {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 500;
        color: ${props => props.theme.color4};
        position: relative;
        margin-top: 0;
        margin-bottom: 20px;
    }

    h3 {
        margin-bottom: 1rem;
    }

/*     .company {
        color: ${props => props.theme.color4};
        width: fit-content;
        border-bottom: 1px solid ${props => props.theme.color4};
        padding-left: 0;
        margin-left: 1rem;
    } */

`


export const ExperienceStyle = styled.article`
    margin-bottom: 40px;

    h2 {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 500;
        color: ${props => props.theme.color4};
        position: relative;
        margin-top: 0;
        margin-bottom: 20px;

        span {
            width: 30px;
            height: 30px;
            margin-right: 8px;
            display: inline-flex;
            color: #fff;
            border-radius: 50%;
            -moz-background-clip: padding;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
            background: ${props => props.theme.color4};
            text-align: center;
            font-size: 16px;
            position: relative;
            top: 0px;
            align-items: center;
            justify-content: center;
        }
    }

    .item {
        margin-bottom: 20px;
    }

`

