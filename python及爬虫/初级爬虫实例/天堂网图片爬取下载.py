import os
import urllib.request
from lxml import etree
import requests

def Schedule(blocknum,blocksize,totalsize):
    per=100.0*blocknum*blocksize/totalsize
    if per>100:
        per=100
    print('当前下载进度：%d'%per)
user_agent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3610.2 Safari/537.36'
headers = {'User-Agent': user_agent}
r = requests.get('http://www.ivsky.com/tupian/ziranfengguang/', headers=headers)
#使用lxml解析网页
html=etree.HTML(r.text)
img_urls=html.xpath('.//img/@src')#先找到所有的img
i=0
path='d://下载'
for img_url in img_urls:
    local = os.path.join(path, 'img' + str(i) + '.jpg')
    urllib.request.urlretrieve(img_url,local,Schedule)
    i=i+1
