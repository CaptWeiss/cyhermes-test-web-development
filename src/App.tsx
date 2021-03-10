import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentMethod from './components/PaymentMethod';
import TrialAndPricing from './components/TrialAndPricing';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const useStyles = makeStyles(theme => createStyles({
  container: {
    height: '100vh',
    // width: '100vw',
    justifyContent: 'center',
  },
  mainBody: {
    padding: '3% 10%',
  },
  sideNav: {
    paddingRight: '8vw',
    backgroundColor: '#222021',
    color: '#A7A6A6',
    display: 'flex',
    flexDirection: 'column',
    "&>.gbayesile": {
      flexGrow: 1,
    },
  },
  logo: {
    padding: theme.spacing(6),
    "&>img": {
      height: '40px',
      paddingBottom: '30px',
    },
  },
  listNavs: {
    paddingInlineStart: 0,
    "&>li": {
      listStyleType: 'none',
      height: '40px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: '2.3em',
      marginTop: '10px',
      "&.sub-list": {
        fontSize: '0.7em',
        marginLeft: '10px',
      },
      "&>div": {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }
    },
    "&>li:hover": {
      cursor: 'pointer',
      color: '#fff',
    },
    "&>.selected": {
      paddingLeft: 0,
      color: '#fff',
      "&::before": {
        width: "0.3em",
        height: "40px",
        content: '""',
        backgroundColor: "#ffca00",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        marginRight: "2em",
      },
    },
  },
  "module-container": {
    height: '8em',
    position: 'relative',
    margin: '0 0 10% 40px',
    borderRadius: '10px',
    padding: '12px 12px 12px 20%',
    borderRight: '1px solid #A7A6A6',
    borderBottom: '1px solid #A7A6A6',
    borderTop: '1px solid #A7A6A6',
    "&>.side-module": {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      "&::before": {
        borderRadius: '10px 0 0 0',
        display: 'block',
        content: '""',
        flex: '2 0 0',
        height: '1px',
        borderLeft: '1px solid #A7A6A6',
      },
      "&::after": {
        borderRadius: '0 0 0 10px',
        display: 'block',
        content: '""',
        flex: '2 0 0',
        height: '1px',
        borderLeft: '1px solid #A7A6A6',
      },
      "&>.side-content": {
        flex: '10 0 0',
        color: '#A7A6A6',
        overflow: 'hidden',
        fontSize: '8em',
        fontFamily: 'Arial Black',
        marginLeft: '-25px',
        marginTop: '-30px',
      },
    },
    "&>.main-module>span": {
      display: 'block',
    },
  },
  // "quote-section": {
    // display: 'flex',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // width: '100%',
    // height: '40%',
    // "&>>.main-module": {
    //   // border: '2px solid #A7A6A6',
    //   position: 'relative',
    //   padding: '10px 30px',
    //   margin: '0 15px',
    //   textDecoration: 'none',
    // },
  // },
}))


function App() {
  const [view, setView] = useState<number>(0);
  const classes = useStyles();

  return (
    <Grid container className={classes.container} >
      <Grid item xs={4} className={classes.sideNav} >
        <div className={classes.logo} >
          <img src={logo} alt="logo" />
        </div>
        <ul className={classes.listNavs} >
          <li onClick={()=>setView(0)} className={`${view===0?'selected' :''}`} >
            <div>
              <p>Trial & Pricing</p>
              {view===0&&<ArrowForwardIcon style={{ color: '#A7A6A6'}} />}
            </div>
          </li>
          <li onClick={() => setView(1)} className={`${view===1 ? 'selected' :''}`}  >
            <div>
              <p>Payment Method</p>
              {view === 1 && <ArrowForwardIcon style={{ color: '#A7A6A6' }} />}
            </div>
          </li>
        </ul>
        <hr style={{borderStyle:'none',borderTopStyle:'dashed', borderColor:'#FFCA00',width:'10%',marginLeft:'40px',borderWidth:'1px'}} />
        <ul className={classes.listNavs} >
          <li className="sub-list" >
            Get started...
          </li>
        </ul>
        <div className="gbayesile" ></div>
        <div className={classes['module-container']} >
          <div className="side-module" >
            <div className="side-content" >“</div>
          </div>
          <p className={'main-module'} >
            Success is not final; failure is not fatal: it is the courage to continue that counts.
            <span> -Winston Churchill </span>
          </p>
        </div>
      </Grid>
      <Grid item xs={8} className={classes.mainBody} >
        {
          view===0?
            <TrialAndPricing /> :
            <PaymentMethod />
        }
      </Grid>
    </Grid>
  );
}

export default App;
