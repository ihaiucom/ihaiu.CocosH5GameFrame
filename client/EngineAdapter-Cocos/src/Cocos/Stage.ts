namespace Engines
{
    export class Stage
    {
        static ALIGN_LEFT="left";
        static ALIGN_RIGHT="right";
        static ALIGN_CENTER="center";
        static ALIGN_TOP="top";
        static ALIGN_MIDDLE="middle";
        static ALIGN_BOTTOM="bottom";

        sResize: Signal = new Signal();
        sClick: Signal = new Signal();
        sMouseDown: Signal = new Signal();
        sMouseUp: Signal = new Signal();
        sMouseMove: Signal = new Signal();

        width: number = 1334;
        height: number = 750;

        mouseX: number = 0;
        mouseY: number = 0;
    }
}