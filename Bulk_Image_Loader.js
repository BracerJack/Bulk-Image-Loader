//Bulk Image Loader created by Bracer Jack.
//www.youtube.com.sg/user/Bracerjack.

//Usage:

//The function all_images_loaded() will be triggered when all images are loaded.
//The function progress_report() will be triggered with a single argument containing percentage loaded from 0 to 100% [optional].

//let bulk_image_loader = new Bulk_Image_Loader(array_of_image_urls_to_load, all_images_loaded, progress_report);

class Bulk_Image_Loader
{
	constructor(array_of_image_urls_to_load, images_are_all_loaded_callback, optional_progress_report_in_percentage_callback)
	{
		this.images_loaded = 0;
		this.images_loaded_in_percentage = 0;
		this.internal_copy_of_the_array = array_of_image_urls_to_load;
		this.internal_copy_of_the_call_back_function = images_are_all_loaded_callback;
		this.internal_copy_of_progress_report_in_percentage = optional_progress_report_in_percentage_callback;
		this.internal_copy_of_the_array.forEach(this.load_images.bind(this));
	}
	
	load_images(value, index, array)
	{
		let temporary_image_loader = new Image();
		temporary_image_loader.src = value; //This along starts the loading of images.

		temporary_image_loader.addEventListener("loadend", this.single_image_loaded.bind(this));
	}
	
	single_image_loaded (event)
	{
		this.images_loaded += 1;
		
		if (this.images_loaded === this.internal_copy_of_the_array.length)
		{
			this.images_loaded_in_percentage = 100;
			
			if (this.internal_copy_of_progress_report_in_percentage == undefined)
			{
				//Do Nothing.
			}
			else
			{
				this.internal_copy_of_progress_report_in_percentage(this.images_loaded_in_percentage);
			}
			
			this.images_are_all_loaded();
		}
		else
		{
			this.images_loaded_in_percentage = Math.floor( (this.images_loaded * 100)/this.internal_copy_of_the_array.length );
			
			if (this.internal_copy_of_progress_report_in_percentage == undefined)
			{
				//Do Nothing.
			}
			else
			{
				this.internal_copy_of_progress_report_in_percentage(this.images_loaded_in_percentage);
			}
		}
	}
	
	images_are_all_loaded()
	{
		this.internal_copy_of_the_call_back_function();
	}
}