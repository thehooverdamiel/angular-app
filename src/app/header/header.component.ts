import { Component } from '@angular/core';

@Component({
    selector: 'bs-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    title = "It's ya title";
    tagLine = "tagline like you got no tagline";
    imageUrl = "../assets/book1.jpg";
    editableTitle = "you can type over me";
    showLast = false;
    offColor = "";

    house = [
        {name: "bathroom", size: "pretty small"},
        {name: "livingroom", size: "medium-ish"},
        {name: "hallway", size: 11}
    ];

    changeColor() :void {
        this.showLast = !this.showLast;
        if (this.offColor === "")
            this.offColor = "grey";
        else
            this.offColor = "";
    }



    myClassVar = 'text-bigger';
    myClassVarBoolean = true;

    resizeText() : void {
        this.myClassVarBoolean = !this.myClassVarBoolean
    }
}