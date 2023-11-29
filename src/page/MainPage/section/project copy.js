import './project.css';

const ProjectSection = () => {
    class FolderScroll {
        constructor(wrapper, sticky) {
          this.wrapper = wrapper
          this.sticky = sticky
          this.children = this.sticky.querySelectorAll('.section')
          this.length = this.children.length
          this.headerVh = 6
          this.contentVh = 96 - this.headerVh * this.length
          this.start = 0
          this.end = 0
        }
        
        init() {
          this.start = this.wrapper.offsetTop + 100
          this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - window.innerHeight - 100
          
          this.children.forEach((child, i) => {
            child.style.bottom = -100 + this.headerVh * (this.length - i) + 'vh'
            child.querySelector('.title').style.height = this.headerVh + 'vh'
            child.querySelector('.content').style.height = this.contentVh + 'vh'
          })
        }
      
        animate() {
          this.children.forEach((child, i) => {
            const unit = (this.end - this.start) / this.length
            const s = this.start + unit * i + 100
            const e = this.start + unit * (i + 1)
      
            if (window.scrollY <= s) {
              child.style.transform = `translate3d(0, 0, 0)`
            } else if (window.scrollY >= e) {
              child.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`
            } else {
              child.style.transform = `translate3d(0, ${(window.scrollY - s) / (unit - 100) * (-this.contentVh)}%, 0)`
            }
          })
        }
      }
      
      const mainContent1 = document.querySelector('.main-content-1')
      const sticky = document.querySelector('.sticky')
      const folderScroll = new FolderScroll(mainContent1, sticky)
      folderScroll.init()
      
      window.addEventListener('resize', () => {
        folderScroll.init()
      })
      window.addEventListener('scroll', () => {
        folderScroll.animate()
      })

    return (
        <div className="projectSection">
            <div className="main-content-1">
                <div className="sticky">
                    <div className="sticky-title">PROJECT</div>
                    <div className="section section-1">
                        <div className="title">TITLE #1</div>
                        <div className="content"></div>
                    </div>
                    <div className="section section-2">
                        <div classNameName="title">TITLE #2</div>
                        <div classNameName="content"></div>
                    </div>
                    <div classNameName="section section-3">
                        <div classNameName="title">TITLE #3</div>
                        <div className="content"></div>
                    </div>
                    <div className="section section-4">
                        <div className="title">TITLE #4</div>
                        <div className="content"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;