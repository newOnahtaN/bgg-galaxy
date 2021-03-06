import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Board Game Geek Graph Galaxies</h1>
        <h2>Choose your graph:</h2>
        <div className='media-list' style={{'padding-top': '65px'}}>
          {/*  
          <Destination description='Client side JavaScript package manager'
                      href='#/galaxy/bower?l=1'
                      media='bower_fly_first.png'
                      name='Bower'/>
          */}
          <Destination description='Links between board games with the same artists'
                      href='#/galaxy/composer?l=1'
                      media='composer_fly_first.png'
                      name='Board Game Artists'/>

          <Destination description='Links between board games with the same designers'
                      href='#/galaxy/rubygems?l=1'
                      media='ruby_fly_first.png'
                      name='Board Game Designers'/>

          <Destination description='Links between board games in the same genres'
                      href='#/galaxy/npm?cx=-1345&cy=-7006&cz=-6553&lx=0.621700613972938&ly=-0.6458651572907126&lz=0.30983196944957914&lw=0.31678177960626197&l=1'
                      media='npm_fly_first.png'
                      name='Board Game Genres'/>

          <Destination description='Links between board games in the same families'
                      href='#/galaxy/gosearch?l=1'
                      media='go_fly_first.png'
                      name='Board Game Families'/>

          <Destination description='Links between board games with the same mechanics'
                      href='#/galaxy/python?cx=-2700&cy=377&cz=5622&lx=-0.0869&ly=-0.2315&lz=-0.0338&lw=0.9684&ml=150&s=1.75&l=1&v=2015-09-27T13-00-00Z'
                      media='composer_fly_first.png'
                      name='Board Game Mechanics'/>

          <Destination description='Links between board games with the same publishers'
                      href='#/galaxy/nuget?l=1'
                      media='nuget_fly_first.png'
                      name='Board Games Publishers'/>
          {/* 
          <Destination description='Test Board Game Galaxy'
                      href='#/galaxy/cran?cx=-2482&cy=-5685&cz=-291&lx=0.2264&ly=-0.6790&lz=0.4330&lw=0.5480&ml=200&s=2.75&l=1'
                      media='cran_fly_first.png'
                      name='test'/>
          
          <Destination description='Debian Package Manager'
                      href='#/galaxy/debian?cx=-201&cy=-6170&cz=-6841&lx=0.5676&ly=-0.7456&lz=0.2400&lw=0.2536&ml=150&s=1.75&l=1'
                      media='debian_fly_first.png'
                      name='Debian'/>

          <Destination description='Fedora Packages'
                      href='#/galaxy/fedora?cx=1539&cy=409&cz=7141&lx=0.0164&ly=0.1453&lz=-0.0027&lw=0.9892&ml=150&s=1.75&l=1&v=2015-09-02T00-00-00Z'
                      media='debian_fly_first.png'
                      name='Fedora'/>

          <Destination description='Arch Linux packages without AUR'
                      href='#/galaxy/arch?cx=870&cy=-3968&cz=-2010&lx=0.7695&ly=-0.3554&lz=0.3109&lw=0.4299&ml=150&s=1.75&l=1&v=no-aur'
                      media='archlinux_fly_first.png'
                      name='Arch Linux'/>

          <Destination description='Arch Linux packages with AUR included'
                      href='#/galaxy/arch?cx=2655&cy=859&cz=7898&lx=0.2160&ly=0.0620&lz=0.8560&lw=0.4656&ml=150&s=1.75&l=1&v=including-aur'
                      media='archlinux_aur_fly_first.png'
                      name='Arch Linux + AUR'/>

          <Destination description='Homebrew is missing package manager for OSX'
                      href='#/galaxy/brew?cx=-803&cy=-3622&cz=-1640&lx=0.3774&ly=-0.7360&lz=0.4338&lw=0.3573&ml=200&s=2.75&l=1'
                      media='brew_fly_first.png'
                      name='Brew'/>
          */}
        </div>
      </div>
    );
  }
}
