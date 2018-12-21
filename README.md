# Bulk-Image-Loader    
Bulk Image Loader for JavaScript    
    
Bulk Image Loader created by Bracer Jack.    
www.youtube.com.sg/user/Bracerjack.
    
//Usage:

Just enter this line to include it into your script:     
<script src="Bulk_Image_Loader.js"></script>    
    
    
//The function all_images_loaded() will be triggered when all images are loaded into memory.    
//The function progress_report() will be triggered with a single argument containing percentage loaded from 0 to 100% [optional].    
     
//This is all you need ! Specify the two other functions to get triggered yourself.    
let bulk_image_loader = new Bulk_Image_Loader(array_of_image_urls_to_load, all_images_loaded, progress_report);    
    
    
    
    
This library only does one thing that is to load all your images into memory, after which your access to those images via those same URL will be immediate because it's already in memory.   

This library is also useful for those of you who need to make sure all your images are loaded BEFORE you do any complicated layout or game stuff with it.
