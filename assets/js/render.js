var headerContent = `

<nav class="navbar navbar-expand-lg navbar-light bg-light shadow ">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="/assets/img/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Kode Studio </a>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
            <div class="hamburger-toggle">
                <div class="hamburger">
                    <i class="fas fa-bars navbar-toggle-icon"></i>
                </div>
            </div>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbar-content">

            <div class="d-flex ms-auto">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Trang chủ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sản phẩm</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dự án</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Thành viên</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Về chúng tôi</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
        `;

var footerContent = `

`;


document.getElementById("header").innerHTML = headerContent;

document.getElementById("footer").innerHTML = footerContent;