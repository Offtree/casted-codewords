import React from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card';

const GameInformation = () => (
  <Card
    zDepth={0}
  >
    <CardTitle
      title={'Game Information'}
    />
    <CardText>
      <ul>
        <li>Player Count:  2-8</li>
        <li>Play Time:  15 Minutes</li>
        <li>Ages:  14+</li>
        <li>Complexity of Rules:  Low</li>
        <li>Setup Time:  Low</li>
        <li>Replay Value:  High - Plenty of words and variable setup makes this game play different each time.</li>
        <li>Direct Conflict:  None</li>
      </ul>
    </CardText>
    <CardTitle
      title={'How It Plays'}
    />
    <CardText>
      <ul>
        <li>
          <b>Game Mechanics:</b>  This is a word deduction game. Players form two teams with one Spymaster on each team. Each spymasters has 8 or 9 spy codenames in the display they need their teammates to guess by giving them one word clues.
        </li>
        <li>
        Turn Summary:
        </li>
        <ol>
          <li>
            The Spymaster gives a one word clues and a number.
          </li>
          <ul>
            <li>The number is how many codenames in the display that the word describes or is related to.  Teammates can guess that many words plus one more if they haven't yet guessed wrong.</li>
            <li>The turn is over if an innocent bystander or one of the opponents spies is guessed.</li>
            <li>If the assassin's codename is guessed, that team loses the game.</li>
          </ul>
        </ol>
        <li>
          End Game/Victory:  The game ends when one team's spies have all been revealed.  That team wins the game.
        </li>
      </ul>
    </CardText>
  </Card>
)

export default GameInformation