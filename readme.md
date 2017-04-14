# Page load speed benchmark

Usage: node index.js <ADDRESS> <NUM>
Where
* <ADDRESS> - page address to be tested
* <NUM> - number of iterations

## Troubleshooting

If you find page load speeds being extremely slow try disabling IP v6:

    $ networksetup -setv6off Wi-Fi

To re-enable it afterwards run this:

    $ networksetup -setv6automatic Wi-Fi
