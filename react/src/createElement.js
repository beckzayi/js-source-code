/*
 * <MyButton color="blue" shadowSize={2}>Click Me</MyButton>
 * React.createElement(
    MyButton,
    {color: 'blue', shadowSize: 2},
    'Click Me'
 * )
*/

const createElement = function(tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children
    }
};

export default createElement;
