$(document).ready(function () {
	$(document).on("click", '[data-toggle="lightbox"]', function (event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});

	jQuery(document).ready(function () {
		var yourIframe = document.getElementById('your-iframe');
		var iframeLoader = document.getElementById('iframe-placeholder');
		var iframeSrc = 'https://www.lookin3d.fr/visite-virtuelle/logeo-10-allee-davranches/fullscreen/'

		iframeLoader.addEventListener('click', function () {
			yourIframe.src = iframeSrc;
			iframeLoader.parentNode.removeChild(iframeLoader);
		}, false);
	});

	jQuery(document).ready(function () {
		var yourIframe = document.getElementById('your-iframe-2');
		var iframeLoader = document.getElementById('iframe-placeholder-2');
		var iframeSrc = 'https://www.lookin3d.fr/visite-virtuelle/logeo-27-rue-amiral-courbet/fullscreen/'

		iframeLoader.addEventListener('click', function () {
			yourIframe.src = iframeSrc;
			iframeLoader.parentNode.removeChild(iframeLoader);
		}, false);
	});

	jQuery(document).ready(function () {
		jQuery('#slideMe2').hide();
		jQuery('a#clickMe2').click(function () {
			jQuery('#slideMe2').slideToggle(400);
			return false;
		});
	});

	jQuery(document).ready(function () {
		var $animation_elements = jQuery('.animation-element');
		var $window = jQuery(window);

		function check_if_in_view() {
			var window_height = $window.height();
			var window_top_position = $window.scrollTop();
			var window_bottom_position = (window_top_position + window_height);

			jQuery.each($animation_elements, function () {
				var $element = jQuery(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top;
				var element_bottom_position = (element_top_position + element_height);

				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&
					(element_top_position <= window_bottom_position)) {
					$element.addClass('in-view');
				} else {
					$element.removeClass('in-view');
				}
			});
		}
		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');
	});

	$(document).ready(function () {
		$('#myform').on('submit', function (e) {
			var jsonData = {};

			var formData = $("#myform").serializeArray();
			// console.log(formData);
			$.each(formData, function () {
				if (jsonData[this.name]) {
					if (!jsonData[this.name].push) {
						jsonData[this.name] = [jsonData[this.name]];
					}
					jsonData[this.name].push(this.value || '');
				} else {
					jsonData[this.name] = this.value || '';
				}
			});
			console.log(jsonData);
			$.ajax({
				url: "action.php",
				type: "POST",
				data: jsonData,

			});
			e.preventDefault();
		});
	});

	$('input[type="checkbox"]').on('change', function () {
		$('input[type="checkbox"]').not(this).prop('checked', false);
	});
});