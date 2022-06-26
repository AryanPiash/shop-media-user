import React from "react";

// Import the desired words
import words from "./words";
class Typing extends React.Component {
    componentDidMount() {
        const options = {
            strings: [
                '<div>Your one-stop shop for all <br> your <span>Media buying needs</span></div>',
                'Find and compare <span>Advert <br> Spaces</span> and <span>Prices</span> within Nigeria'
            ],
            typeSpeed: 40,
            backDelay: 0,
            backSpeed: 30,
            fadeOut: false,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 100,
            loop: true,
            loopCount: Infinity,
            showCursor: false,
            contentType: 'html'
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }
    componentWillUnmount() {
        // Please don't forget to cleanup animation layer
        this.typed.destroy();
    }

    render() {
        return (
            <>
                <span
                    style={{ whiteSpace: "pre" }}
                    ref={(el) => {
                        this.el = el;
                    }}
                />
            </>
        );
    }
}
export default Typing;