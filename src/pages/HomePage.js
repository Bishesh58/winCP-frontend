import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import { getAllWins } from '../redux/actions/winsActions';
import Win from '../components/wins/Win';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    maxWidth: '750px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const wins = useSelector((state) => state.wins.allWins);

  useEffect(() => {
    async function callThis() {
      console.log('I went to fetch the data ');
      await dispatch(getAllWins());
    }
    callThis();
  }, [dispatch]);

  console.log(wins);

  return (
    <div>
      <Container className={classes.container}>
        {wins &&
          wins.map((eachWin) => (
            <Win
              username={eachWin.username}
              body={eachWin.body}
              createdAt={eachWin.createdAt}
              key={eachWin.id}
            />
          ))}
      </Container>
    </div>
  );
};

export default Home;
