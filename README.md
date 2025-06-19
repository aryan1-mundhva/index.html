<html>
    <head>
        <title>
            Tarun Shopping Corner
        </title>
        <link rel="stylesheet" href="main.css">
        

  <style>
  .box {
    width: 100px;
    height: 100px;
    background-color: coral;
    position: relative;
    transition: transform 1s ease-in-out;

    /* Center the text */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Text styling */
    font-size: 20px; /* Increase for bigger text */
    color: white ;
    font-weight: bold;
    font-family: Arial, sans-serif;
    text-align: center;
  }

  .box:hover {
    transform: translateX(200px);
  }
</style>

<div class="box">Sell </div>

 <style>
    #myButton {
      background-color:blue;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
    }

    #myButton.active {
      background-color: red;
    }
    
  </style>

  <button id="myButton">Tarun shop</button>

  <script>
    const button = document.getElementById("myButton");

    button.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  </script>
    </head>
    <body>
      <h1 style="color:darkblue;">Style Like Your Passion</h1>
<div class="a">

  <h3>Men's Wear</h3>
<h3>Ladies Wear</h3>
<h3>Kid's Wear</h3>
</div>
<div class="c">
  <div id="itemList" class="a">
        <h3><a href="C:\Users\acer\Desktop\Work\mens.html"></a></h3>
        <h3><a href="C:\Users\acer\Desktop\Work\ladies.html"></a></h3>
        <h3><a href="C:\Users\acer\Desktop\Work\kids.html"></a></h3>
  </div>
<form onsubmit="handleSubmit(event)">
  <input type="text" id="searchBox" placeholder="Enter item (e.g. men)">
  <button type="submit">Submit</button>
</form>

<!-- Image output area -->
<div id="imageContainer"></div>

      <script src="main.js"></script>

</div>
      <div class="b">
        <img src="1.png">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/c81uh2Bw5LU?si=IB9B4UNaRP8xHnsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </body>
</html>
