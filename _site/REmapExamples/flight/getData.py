import chardet,urllib2


url = "http://flights.ctrip.com/actualtime/depart-sha.p1/"
doc = urllib2.urlopen(url).read()
html =doc.decode('gb2312','strict').encode('utf-8') 
print html
