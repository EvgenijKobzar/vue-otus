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
									<a href="index.html">
										<img src="img/logo/logo.png" alt="Logo">
									</a>
								</div>
								<div class="navbar-wrap main-menu d-none d-lg-flex">
									<ul class="navigation">
										<li class="menu-item-has-children"><a href="#">Добавить новый</a>
											<ul class="submenu">
												<li><a @click='addSeason' href="#">добавить сезон</a></li>
												<li><a @click='addEpisode' href="#">добавить эпизод</a></li>
											</ul>
										</li>
<!--										<li class="menu-item-has-children"><a href="#">Movie</a>-->
<!--											<ul class="submenu">-->
<!--												<li><a href="movie.html">Movie</a></li>-->
<!--												<li><a href="movie-details.html">Movie Details</a></li>-->
<!--											</ul>-->
<!--										</li>-->
<!--										<li><a href="tv-show.html">tv show</a></li>-->
<!--										<li><a href="pricing.html">Pricing</a></li>-->
<!--										<li class="menu-item-has-children"><a href="#">blog</a>-->
<!--											<ul class="submenu">-->
<!--												<li><a href="blog.html">Our Blog</a></li>-->
<!--												<li><a href="blog-details.html">Blog Details</a></li>-->
<!--											</ul>-->
<!--										</li>-->
<!--										<li class="active"><a href="contact.html">contacts</a></li>-->
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

						<!-- Modal Search -->
						<div class="modal fade show" id="search-modal" tabindex="-1" style="display: none; padding-right: 17px;" aria-modal="true" role="dialog">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<form>
										<input type="text" placeholder="Search here...">
										<button><i class="fas fa-search"></i></button>
									</form>
								</div>
							</div>
						</div>
						<!-- Modal Search-end -->
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- header-area-end -->
</template>

<script setup>

const emit = defineEmits([
	'header-season-add',
	'header-episode-add',
]);

function addSeason()
{
	emit('header-season-add');
}
function addEpisode()
{
	emit('header-episode-add');
}
</script>

<style scoped>

</style>