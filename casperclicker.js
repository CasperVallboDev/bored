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

function CheckEasterEggs()
{
    if (score == 69)
    {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }

    if (score == 420)
    {
        window.open("https://www.youtube.com/watch?v=AYiP4wef28I");
    }
    
    if (score == 911)
    {
        window.open("https://www.youtube.com/watch?v=oa7hsRv8-Js");
    }
}
