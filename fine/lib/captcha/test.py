import os
from captcha.image import ImageCaptcha
import captcha.image

font_name = ["fonts/SourceCodePro-Light.ttf",
             "fonts/SourceCodePro-LightIt.ttf",
             "fonts/SourceCodePro-Regular.ttf"]
font_path = [os.path.join(os.path.dirname(captcha.image.__file__), fontname)
             for fontname in font_name]
image = ImageCaptcha(fonts=font_path, width=100, height=38)
data = image.generate('ab34')
print data
image.write("ab34", 'out.png')
