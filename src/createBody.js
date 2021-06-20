export default function createBody(year, month, date) {
  return `ctl00%24ctl02=ctl00%24cphMain%24ctl00%7Cctl00%24cphMain%24btnQuery&ctl00_ctl02_HiddenField=%3B%3BAjaxControlToolkit%2C%20Version%3D3.0.20820.16598%2C%20Culture%3Dneutral%2C%20PublicKeyToken%3D28f01b0e84b6d53e%3Azh-TW%3A707835dd-fa4b-41d1-89e7-6df5d518ffb5%3A411fea1c%3A865923e8%3A77c58d20%3A91bd373d%3A14b56adc%3A596d588c%3A8e72a662%3Aacd642d2%3A269a19ae&ctl00%24cphMain%24cboSearch=%E9%98%B2%E6%B1%9B%E9%87%8D%E9%BB%9E%E6%B0%B4%E5%BA%AB&ctl00%24cphMain%24ucDate%24cboYear=${year}&ctl00%24cphMain%24ucDate%24cboMonth=${month}&ctl00%24cphMain%24ucDate%24cboDay=${date}&__EVENTTARGET=ctl00%24cphMain%24btnQuery&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUJOTQzMTgzODc0D2QWAmYPZBYCAgMPZBYCAgMPZBYCAgEPZBYCZg9kFggCBQ8QZGQWAWZkAgcPDxYEHgdNaW5ZZWFyArIPHgdNYXhZZWFyAuYPZBYIZg8QZBAVNQQxOTcwBDE5NzEEMTk3MgQxOTczBDE5NzQEMTk3NQQxOTc2BDE5NzcEMTk3OAQxOTc5BDE5ODAEMTk4MQQxOTgyBDE5ODMEMTk4NAQxOTg1BDE5ODYEMTk4NwQxOTg4BDE5ODkEMTk5MAQxOTkxBDE5OTIEMTk5MwQxOTk0BDE5OTUEMTk5NgQxOTk3BDE5OTgEMTk5OQQyMDAwBDIwMDEEMjAwMgQyMDAzBDIwMDQEMjAwNQQyMDA2BDIwMDcEMjAwOAQyMDA5BDIwMTAEMjAxMQQyMDEyBDIwMTMEMjAxNAQyMDE1BDIwMTYEMjAxNwQyMDE4BDIwMTkEMjAyMAQyMDIxBDIwMjIVNQQxOTcwBDE5NzEEMTk3MgQxOTczBDE5NzQEMTk3NQQxOTc2BDE5NzcEMTk3OAQxOTc5BDE5ODAEMTk4MQQxOTgyBDE5ODMEMTk4NAQxOTg1BDE5ODYEMTk4NwQxOTg4BDE5ODkEMTk5MAQxOTkxBDE5OTIEMTk5MwQxOTk0BDE5OTUEMTk5NgQxOTk3BDE5OTgEMTk5OQQyMDAwBDIwMDEEMjAwMgQyMDAzBDIwMDQEMjAwNQQyMDA2BDIwMDcEMjAwOAQyMDA5BDIwMTAEMjAxMQQyMDEyBDIwMTMEMjAxNAQyMDE1BDIwMTYEMjAxNwQyMDE4BDIwMTkEMjAyMAQyMDIxBDIwMjIUKwM1Z2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cWAQIzZAICDxBkEBUMATEBMgEzATQBNQE2ATcBOAE5AjEwAjExAjEyFQwBMQEyATMBNAE1ATYBNwE4ATkCMTACMTECMTIUKwMMZ2dnZ2dnZ2dnZ2dnFgECBWQCBA8QZBAVHwExATIBMwE0ATUBNgE3ATgBOQIxMAIxMQIxMgIxMwIxNAIxNQIxNgIxNwIxOAIxOQIyMAIyMQIyMgIyMwIyNAIyNQIyNgIyNwIyOAIyOQIzMAIzMRUfATEBMgEzATQBNQE2ATcBOAE5AjEwAjExAjEyAjEzAjE0AjE1AjE2AjE3AjE4AjE5AjIwAjIxAjIyAjIzAjI0AjI1AjI2AjI3AjI4AjI5AjMwAjMxFCsDH2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cWAQIIZAIGD2QWBGYPEGQQFRgBMAExATIBMwE0ATUBNgE3ATgBOQIxMAIxMQIxMgIxMwIxNAIxNQIxNgIxNwIxOAIxOQIyMAIyMQIyMgIyMxUYATABMQEyATMBNAE1ATYBNwE4ATkCMTACMTECMTICMTMCMTQCMTUCMTYCMTcCMTgCMTkCMjACMjECMjICMjMUKwMYZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnFgFmZAICD2QWAmYPEGQQFQYBMAIxMAIyMAIzMAI0MAI1MBUGATACMTACMjACMzACNDACNTAUKwMGZ2dnZ2dnFgFmZAINDzwrABEDAA8WBB4LXyFEYXRhQm91bmRnHgtfIUl0ZW1Db3VudAIUZAEQFgAWABYADBQrAAAWAmYPZBYoAgEPZBYWZg8PFgIeBFRleHQFDOefs%2BmWgOawtOW6q2RkAgEPDxYCHwQFCTIwLDI2Ni4xMGRkAgIPZBYCZg8VAhAyMDIxLTA2LTA5KDDmmYIpEDIwMjEtMDYtMTAoMOaZgilkAgMPDxYCHwQFBDkuMTBkZAIEDw8WAh8EBQY2NjUuMTlkZAIFDw8WAh8EBQU3NC40OGRkAgYPDxYCHwQFBDEuMzVkZAIHDw8WAh8EBREyMDIxLTA2LTA5KDIz5pmCKWRkAggPDxYCHwQFBjIyNS41NWRkAgkPDxYCHwQFCDcsMzI3Ljk3ZGQCCg8PFgIfBAUHMzYuMTYgJWRkAgIPZBYWZg8PFgIfBAUM57%2Bh57%2Bg5rC05bqrZGQCAQ8PFgIfBAUJMzMsNTUwLjUwZGQCAg9kFgJmDxUCEDIwMjEtMDYtMDkoMOaZgikQMjAyMS0wNi0xMCgw5pmCKWQCAw8PFgIfBAUEMC4xMGRkAgQPDxYCHwQFBjIxNS40MGRkAgUPDxYCHwQFBDAuMDBkZAIGDw8WAh8EBQQwLjI1ZGQCBw8PFgIfBAURMjAyMS0wNi0wOSgyM%2BaZgilkZAIIDw8WAh8EBQYxNjQuNjdkZAIJDw8WAh8EBQkyOCw3NDUuMjJkZAIKDw8WAh8EBQc4NS42OCAlZGQCAw9kFhZmDw8WAh8EBRLlr7blsbHnrKzkuozmsLTluqtkZAIBDw8WAh8EBQgzLDE0Ny4xOGRkAgIPZBYCZg8VAhAyMDIxLTA2LTA5KDDmmYIpEDIwMjEtMDYtMTAoMOaZgilkAgMPDxYCHwQFBTI1LjUwZGQCBA8PFgIfBAUGMTUyLjg1ZGQCBQ8PFgIfBAUFMTMuMzJkZAIGDw8WAh8EBQQxLjUzZGQCBw8PFgIfBAURMjAyMS0wNi0wOSgyM%2BaZgilkZAIIDw8WAh8EBQYxMzUuMzJkZAIJDw8WAh8EBQgxLDM0My4xNGRkAgoPDxYCHwQFBzQyLjY4ICVkZAIED2QWFmYPDxYCHwQFD%2BawuOWSjOWxseawtOW6q2RkAgEPDxYCHwQFCDIsOTk4Ljk0ZGQCAg9kFgJmDxUCEDIwMjEtMDYtMDkoMOaZgikQMjAyMS0wNi0xMCgw5pmCKWQCAw8PFgIfBAUEMC4wMGRkAgQPDxYCHwQFBTU1LjUwZGQCBQ8PFgIfBAUEOS4xMGRkAgYPDxYCHwQFAi0tZGQCBw8PFgIfBAURMjAyMS0wNi0wOSgyM%2BaZgilkZAIIDw8WAh8EBQU2My43M2RkAgkPDxYCHwQFBjU2OC44OWRkAgoPDxYCHwQFBzE4Ljk3ICVkZAIFD2QWFmYPDxYCHwQFDOaYjuW%2Bt%2BawtOW6q2RkAgEPDxYCHwQFCDEsMjIyLjA1ZGQCAg9kFgJmDxUCEDIwMjEtMDYtMDkoMOaZgikQMjAyMS0wNi0xMCgw5pmCKWQCAw8PFgIfBAUFMjYuNDBkZAIEDw8WAh8EBQUxOS44OGRkAgUPDxYCHwQFBDMuNjdkZAIGDw8WAh8EBQItLWRkAgcPDxYCHwQFEDIwMjEtMDYtMDkoN%2BaZgilkZAIIDw8WAh8EBQU1Ni42MWRkAgkPDxYCHwQFBjYzMy45N2RkAgoPDxYCHwQFBzUxLjg4ICVkZAIGD2QWFmYPDxYCHwQFD%2Bmviemtmua9reawtOW6q2RkAgEPDxYCHwQFCTExLDQ0Ni4wMWRkAgIPZBYCZg8VAhAyMDIxLTA2LTA5KDDmmYIpEDIwMjEtMDYtMTAoMOaZgilkAgMPDxYCHwQFBDAuMDBkZAIEDw8WAh8EBQYyODguMzJkZAIFDw8WAh8EBQU0OS4zMWRkAgYPDxYCHwQFAi0tZGQCBw8PFgIfBAURMjAyMS0wNi0wOSgyM%2BaZgilkZAIIDw8WAh8EBQYyNzIuMTBkZAIJDw8WAh8EBQgyLDk5Mi44NWRkAgoPDxYCHwQFBzI2LjE1ICVkZAIHD2QWFmYPDxYCHwQFDOW%2Bt%2BWfuuawtOW6q2RkAgEPDxYCHwQFCTE4LDY0Mi4wMGRkAgIPZBYCZg8VAhAyMDIxLTA2LTA5KDDmmYIpEDIwMjEtMDYtMTAoMOaZgilkAgMPDxYCHwQFBDcuNTBkZAIEDw8WAh8EBQYyMDMuMDlkZAIFDw8WAh8EBQQwLjAwZGQCBg8PFgIfBAUCLS1kZAIHDw8WAh8EBRAyMDIxLTA2LTA5KDfmmYIpZGQCCA8PFgIfBAUIMSwzNDMuNzFkZAIJDw8WAh8EBQgyLDY4Ni43NGRkAgoPDxYCHwQFBzE0LjQxICVkZAIID2QWFmYPDxYCHwQFCeefs%2BWyoeWjqWRkAgEPDxYCHwQFBjE0OS4zMWRkAgIPZBYCZg8VAhAyMDIxLTA2LTA5KDDmmYIpEDIwMjEtMDYtMTAoMOaZgilkAgMPDxYCHwQFBDkuMDBkZAIEDw8WAh8EBQY3MzAuNDBkZAIFDw8WAh8EBQY3NDEuNDBkZAIGDw8WAh8EBQItLWRkAgcPDxYCHwQFETIwMjEtMDYtMDkoMjPmmYIpZGQCCA8PFgIfBAUGMjc0LjEwZGQCCQ8PFgIfBAUGMTI1LjQwZGQCCg8PFgIfBAUHODMuOTkgJWRkAgkPZBYWZg8PFgIfBAUM6Zyn56S%2B5rC05bqrZGQCAQ8PFgIfBAUIMyw3NTIuODhkZAICD2QWAmYPFQIQMjAyMS0wNi0wOSgw5pmCKRAyMDIxLTA2LTEwKDDmmYIpZAIDDw8WAh8EBQQwLjAwZGQCBA8PFgIfBAUGMzAyLjA5ZGQCBQ8PFgIfBAUGMjU4LjA3ZGQCBg8PFgIfBAUCLS1kZAIHDw8WAh8EBRAyMDIxLTA2LTA5KDfmmYIpZGQCCA8PFgIfBAUGOTk3LjMyZGQCCQ8PFgIfBAUIMiwwNzAuODlkZAIKDw8WAh8EBQc1NS4xOCAlZGQCCg9kFhZmDw8WAh8EBQ%2Fml6XmnIjmva3msLTluqtkZAIBDw8WAh8EBQkxMiw4MDYuMDNkZAICD2QWAmYPFQIQMjAyMS0wNi0wOSgw5pmCKRAyMDIxLTA2LTEwKDDmmYIpZAIDDw8WAh8EBQQxLjUwZGQCBA8PFgIfBAUGNTE1Ljg5ZGQCBQ8PFgIfBAUFMTkuODdkZAIGDw8WAh8EBQItLWRkAgcPDxYCHwQFEDIwMjEtMDYtMDkoN%2BaZgilkZAIIDw8WAh8EBQY3NDAuNzJkZAIJDw8WAh8EBQg3LDAzOC4wNGRkAgoPDxYCHwQFBzU0Ljk2ICVkZAILD2QWFmYPDxYCHwQFD%2BmbhumbhuaUlOays%2BWgsGRkAgEPDxYCHwQFBjYzMS45MWRkAgIPZBYCZg8VAhAyMDIxLTA2LTA5KDDmmYIpEDIwMjEtMDYtMTAoMOaZgilkAgMPDxYCHwQFBTEzLjMwZGQCBA8PFgIfBAUIMSwwMDAuNzNkZAIFDw8WAh8EBQYyODcuMzRkZAIGDw8WAh8EBQItLWRkAgcPDxYCHwQFETIwMjEtMDYtMDkoMjPmmYIpZGQCCA8PFgIfBAUGMjEzLjE4ZGQCCQ8PFgIfBAUGMzYyLjQ2ZGQCCg8PFgIfBAUHNTcuMzYgJWRkAgwPZBYWZg8PFgIfBAUM5rmW5bGx5rC05bqrZGQCAQ8PFgIfBAUINSwwODYuNTFkZAICD2QWAmYPFQIQMjAyMS0wNi0wOSgw5pmCKRAyMDIxLTA2LTEwKDDmmYIpZAIDDw8WAh8EBQQ4LjAwZGQCBA8PFgIfBAUGMTgxLjQ0ZGQCBQ8PFgIfBAUFMTUuNDNkZAIGDw8WAh8EBQQxLjA2ZGQCBw8PFgIfBAURMjAyMS0wNi0wOSgyM%2BaZgilkZAIIDw8WAh8EBQYxOTguODVkZAIJDw8WAh8EBQgyLDgzMy4xOWRkAgoPDxYCHwQFBjU1LjcgJWRkAg0PZBYWZg8PFgIfBAUP5LuB576p5r2t5rC05bqrZGQCAQ8PFgIfBAUIMiw1MjcuNDZkZAICD2QWAmYPFQIQMjAyMS0wNi0wOSgw5pmCKRAyMDIxLTA2LTEwKDDmmYIpZAIDDw8WAh8EBQQ4LjUwZGQCBA8PFgIfBAUGMTIyLjY1ZGQCBQ8PFgIfBAUFMjMuODRkZAIGDw8WAh8EBQItLWRkAgcPDxYCHwQFEDIwMjEtMDYtMDkoN%2BaZgilkZAIIDw8WAh8EBQU5OC45OWRkAgkPDxYCHwQFCDEsMjM2LjYwZGQCCg8PFgIfBAUHNDguOTMgJWRkAg4PZBYWZg8PFgIfBAUM55m95rKz5rC05bqrZGQCAQ8PFgIfBAUIMSwxNzMuNDVkZAICD2QWAmYPFQIQMjAyMS0wNi0wOSg45pmCKRAyMDIxLTA2LTEwKDjmmYIpZAIDDw8WAh8EBQQzLjUwZGQCBA8PFgIfBAUFMTMuMDBkZAIFDw8WAh8EBQQwLjAwZGQCBg8PFgIfBAUCLS1kZAIHDw8WAh8EBRAyMDIxLTA2LTA5KDjmmYIpZGQCCA8PFgIfBAUGMTA0LjIzZGQCCQ8PFgIfBAUFOTUuMDBkZAIKDw8WAh8EBQU4LjEgJWRkAg8PZBYWZg8PFgIfBAUP54OP5bGx6aCt5rC05bqrZGQCAQ8PFgIfBAUINyw4NTcuOTBkZAICD2QWAmYPFQIQMjAyMS0wNi0wOSg35pmCKRAyMDIxLTA2LTEwKDfmmYIpZAIDDw8WAh8EBQQzLjkwZGQCBA8PFgIfBAUFNTAuMDBkZAIFDw8WAh8EBQU2NS4wMGRkAgYPDxYCHwQFAi0tZGQCBw8PFgIfBAUQMjAyMS0wNi0wOSg35pmCKWRkAggPDxYCHwQFBTU0Ljc2ZGQCCQ8PFgIfBAUINCw4MzcuMDBkZAIKDw8WAh8EBQc2MS41NiAlZGQCEA9kFhZmDw8WAh8EBQzmm77mlofmsLTluqtkZAIBDw8WAh8EBQk1MCw5NTYuMDBkZAICD2QWAmYPFQIQMjAyMS0wNi0wOSgw5pmCKRAyMDIxLTA2LTEwKDDmmYIpZAIDDw8WAh8EBQUxNS40MGRkAgQPDxYCHwQFBjQ0My4wMGRkAgUPDxYCHwQFBDAuMDBkZAIGDw8WAh8EBQItLWRkAgcPDxYCHwQFETIwMjEtMDYtMDkoMjPmmYIpZGQCCA8PFgIfBAUGMTk5LjQzZGQCCQ8PFgIfBAUINyw3ODEuMDBkZAIKDw8WAh8EBQcxNS4yNyAlZGQCEQ9kFhZmDw8WAh8EBQzljZfljJbmsLTluqtkZAIBDw8WAh8EBQg5LDA5Ny45MGRkAgIPZBYCZg8VAhAyMDIxLTA2LTA5KDDmmYIpEDIwMjEtMDYtMTAoMOaZgilkAgMPDxYCHwQFBTEzLjEwZGQCBA8PFgIfBAUGNDExLjIwZGQCBQ8PFgIfBAUFNDkuOTBkZAIGDw8WAh8EBQItLWRkAgcPDxYCHwQFEDIwMjEtMDYtMDkoN%2BaZgilkZAIIDw8WAh8EBQYxNjkuODdkZAIJDw8WAh8EBQg0LDU3MC45NWRkAgoPDxYCHwQFBzUwLjI0ICVkZAISD2QWFmYPDxYCHwQFD%2BmYv%2BWFrOW6l%2BawtOW6q2RkAgEPDxYCHwQFCDEsNTI1Ljg5ZGQCAg9kFgJmDxUCEDIwMjEtMDYtMDkoMOaZgikQMjAyMS0wNi0xMCgw5pmCKWQCAw8PFgIfBAUEMC4wMGRkAgQPDxYCHwQFBDAuMDBkZAIFDw8WAh8EBQU4Ny41N2RkAgYPDxYCHwQFAi0tZGQCBw8PFgIfBAURMjAyMS0wNi0wOSgyM%2BaZgilkZAIIDw8WAh8EBQUzMi4xN2RkAgkPDxYCHwQFBjM2OC4wMGRkAgoPDxYCHwQFBzI0LjEyICVkZAITD2QWFmYPDxYCHwQFEumrmOWxj%2Ba6quaUlOays%2BWgsGRkAgEPDxYCHwQFAi0tZGQCAg9kFgJmDxUCEDIwMjEtMDYtMDkoMOaZgikQMjAyMS0wNi0xMCgw5pmCKWQCAw8PFgIfBAUFMzEuOTBkZAIEDw8WAh8EBQgyLDk4NC45NWRkAgUPDxYCHwQFCDIsOTg0Ljk1ZGQCBg8PFgIfBAUCLS1kZAIHDw8WAh8EBREyMDIxLTA2LTA5KDIz5pmCKWRkAggPDxYCHwQFBTE2LjcwZGQCCQ8PFgIfBAUCLS1kZAIKDw8WAh8EBQItLWRkAhQPZBYWZg8PFgIfBAUM54mh5Li55rC05bqrZGQCAQ8PFgIfBAUIMiw2NTEuMzJkZAICD2QWAmYPFQIQMjAyMS0wNi0wOSgw5pmCKRAyMDIxLTA2LTEwKDDmmYIpZAIDDw8WAh8EBQQ4LjAwZGQCBA8PFgIfBAUENS43NWRkAgUPDxYCHwQFBDkuMzNkZAIGDw8WAh8EBQItLWRkAgcPDxYCHwQFETIwMjEtMDYtMDkoMjPmmYIpZGQCCA8PFgIfBAUGMTI0LjE2ZGQCCQ8PFgIfBAUGODMzLjAwZGQCCg8PFgIfBAUHMzEuNDIgJWRkAg8PDxYCHgdWaXNpYmxlaGRkGAEFFGN0bDAwJGNwaE1haW4kZ3ZMaXN0DzwrAAwBCAIBZI4n3FBmU3A%2BZDnqWIxwklafTe1sHo%2FTVyaJOWGHS4Kn&__VIEWSTATEGENERATOR=97C444AB&__ASYNCPOST=true&`;
}