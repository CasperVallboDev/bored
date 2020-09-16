var scoreText = document.getElementById("score");
var score = 0;

SetText(score);

function Add()
{
    score ++;
    SetText(score);
}

function SetText(text)
{
    scoreText.innerHTML = text;
}