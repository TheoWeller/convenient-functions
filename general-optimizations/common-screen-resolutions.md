SOURCE: https://www.designersinsights.com/designer-resources/designing-responsive-website/

Resolutions(in pixels):
Standard HD Desktop => 1920 x 1080
iPhone 5 => 320 x 568
iPad => 768 x 1024



SOURCE: https://docs.microsoft.com/en-us/windows/uwp/design/layout/screen-sizes-and-breakpoints-for-responsive-design 
Size class          Breakpoints         Typical screen size (diagonal)	     Devices               Window sizes  
Small	             640px or less	         4" to 6"; 20" to 65"	            Phones, TVs	           320x569, 360x640, 480x854
Medium	           641px to 1007px	       7" to 12"	                      Phablets, tablets	     960x540
Large	             1008px or greater	     13" and larger	                  PCs, laptops	         1024x640, 1366x768, 1920x1080

**General recommendations**
Small
- Set left and right window margins to 12px to create a visual separation between the left and right edges of the app window.
- Dock app bars to the bottom of the window for improved reachability.
- Use one column/region at a time.
- Use an icon to represent search (don't show a search box).
- Put the navigation pane in overlay mode to conserve screen space.
- If you're using the master details pattern, use the stacked presentation mode to save screen space.

Medium
- Set left and right window margins to 24px to create a visual separation between the left and right edges of the app window.
- Put command elements like app bars at the top of the app window.
- Use up to two columns/regions.
- Show the search box.
- Put the navigation pane into sliver mode so a narrow strip of icons always shows.
- Consider further tailoring for TV experiences.

Large
- Set left and right window margins to 24px to create a visual separation between the left and right edges of the app window.
- Put command elements like app bars at the top of the app window.
- Use up to three columns/regions.
- Show the search box.
- Put the navigation pane into docked mode so that it always shows.
