$(document).ready(function () {

  $('#generate').click(function(){
    
    var number = $("input").val();
    $("input").val("");
  

  $.ajax({
    url: 'https://looney-toons-api.herokuapp.com/api/characters',
    dataType: 'json',
    success: function (result) {
      console.log(result)
      var data = result.data
      console.log(data)

      var html_str = ""

      for (var i = 0; i < data.length; i++) {
          console.log(data[i].img)
          console.log(data[i].name)
          console.log(data[i].birthDay)

          html_str += `<div class='col-11 col-sm-5 col-md-4'>
          <button id='btn-delete' class='btn btn-success w-100'>Remove</button>

          <div class='card my-1 p-2'>
          
            <img class='card-img-top' alt='user' src=${data[i].img}>

            <div class='card-body'>
                <h5 class="card-title">My Name is
                ${data[i].name}
                </h5>
                <h5 class="age">I was born in ${data[i].birthDay}</h5>
            </div>
          </div>    
        </div>`
      }

      $('.row').append(html_str)
    }
  })
})
      $(document).on('click','#btn-delete', function(){
        $(this).parent().remove()
      })

})