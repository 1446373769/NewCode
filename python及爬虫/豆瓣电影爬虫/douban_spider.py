
import requests
from lxml import etree
# 1、将豆瓣网上的页面抓取下来
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36',
    'Referer': 'https://movie.douban.com/'
}
url='https://movie.douban.com/cinema/nowplaying/beijing/'


respose=requests.get(url,headers)

text=respose.text
# print(respose.content)
# print(respose.text)
# respose.text返回的是解码后的字符串
# respose.content返回的是一个原生的字符串就是从网页上抓取下来的没有经过处理的，是byte类型

# 2、将抓取下来的数据按照一定规则进行提取
html=etree.HTML(text)
ul=html.xpath("//ul[@class='lists']")[0]
# print(etree.tostring(ul,encoding='utf-8',).decode("utf-8"))
lis=ul.xpath("./li")
movies=[]
for li in lis:
    # print(etree.tostring(li,encoding='utf-8',).decode("utf-8"))
    #拿取title
    title=li.xpath("@data-title")[0]
    #拿取评分
    score=li.xpath("@data-score")[0]
    #拿取电影时长
    duration = li.xpath("@data-duration")[0]
    #拿取上映地区
    region=li.xpath("@data-region")[0]
    #抓取导演
    director = li.xpath("@data-director")[0]
    #抓取演员
    actors=li.xpath("@data-actors")[0]
    #抓取海报
    thumble=li.xpath(".//img/@src")[0]
    movie={
        'title':title,
        'score':score,
        'duration':duration,
        'region':region,
        'director':director,
        'actors':actors,
        'thumble':thumble
    }
    movies.append(movie)
print(movies)
# 3、
