$(function () {
  $.ajax({
    type: "Get",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (data) {
      $.each(data, function (i, elm) {
        var card = `<div class="col-xs-12 col-sm-6 col-md-4">
        <div class="image-flip">
            <div class="mainflip flip-0">
                <div class="frontside">
                    <div class="card">
                        <div class="card-body text-center">
                            <p><img class="img-fluid"
                                    src="./Pictures/image1.jpeg"
                                    alt="card image"></p>
                            <h4 class="card-title">${elm.name}</h4>
                            <Email: class="card-text">Phone: ${elm.phone} <br> Email: ${elm.email}</p>
                            <a
                                href="https://www.fiverr.com/share/qb8D02"
                                class="btn btn-primary btn-sm"><i
                                    class="fa fa-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div class="backside">
                    <div class="card">
                        <div class="card-body text-center mt-4">
                            <h4 class="card-title">${elm.company.name} <br><br> </h4>
                            <p class="card-text">${elm.company.catchPhrase} <br><br> ${elm.company.bs}</p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="social-icon
                                        text-xs-center"
                                        target="_blank"
                                        href="https://www.fiverr.com/share/qb8D02">
                                        <i class="fa
                                            fa-facebook"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon
                                        text-xs-center"
                                        target="_blank"
                                        href="https://www.fiverr.com/share/qb8D02">
                                        <i class="fa
                                            fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon
                                        text-xs-center"
                                        target="_blank"
                                        href="https://www.fiverr.com/share/qb8D02">
                                        <i class="fa fa-skype"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="social-icon
                                        text-xs-center"
                                        target="_blank"
                                        href="https://www.fiverr.com/share/qb8D02">
                                        <i class="fa fa-google"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        $("#teamMembers").append(card);
      });
    },
    error: function (e) {
      alert(e.responseText);
    },
  });
});
