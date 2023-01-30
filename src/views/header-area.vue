<template>
	<!-- header-area -->
	<header>
		<div id="sticky-header" class="menu-area transparent-header">
			<div class="container custom-container">
				<div class="row">
					<div class="col-12">
						<div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
						<div class="menu-wrap">
							<nav class="menu-nav show">
								<div class="logo">
									<a href="">
										<img src="img/logo/logo.png" alt="Logo">
									</a>
								</div>
								<div class="navbar-wrap main-menu d-none d-lg-flex">
									<ul class="navigation">
										<li class="active menu-item-has-children"><a href="#">Home</a>
											<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
									</ul>
								</div>
								<div class="header-action d-none d-md-block">
									<ul>
										<li class="header-search"><a href="#" data-toggle="modal" data-target="#search-modal"><i class="fas fa-search"></i></a></li>
										<li class="header-lang">
											<form action="#">
												<div class="icon"><i class="flaticon-globe"></i></div>
												<select id="lang-dropdown">
													<option value="">En</option>
													<option value="">Au</option>
													<option value="">AR</option>
													<option value="">TU</option>
												</select>
											</form>
										</li>
										<li class="header-btn"><a href="#" class="btn">Sign In</a></li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- header-area-end -->
</template>

<script>

</script>

<style scoped>

</style>