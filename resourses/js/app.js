const app = {

	urlData : "/resourses/data/autos.json",

	cargarFichas : function(){

		const fichas = document.querySelector("#fichas"); //Obj DOOM

		let html = ""; //Variable donde redacta el html

		//This por usar ese metodo
		fetch(this.urlData)
			.then( response => response.json())
			.then( autos => {
				for(let auto of autos){
					html = `
						<div class="ficha">
							<img src="resourses/img/${ auto.foto }" alt="${ auto.marca }">
							<div class="data">
								<h3>${ auto.marca }</h3>
								<span>${ auto.modelo }</span>
								<span>${ auto.anio }</span><br>
								<small>${ auto.motor.desplazamiento }, ${ auto.motor.potencia }, ${ auto.motor.rendimiento }</small>
							</div>
						</div>`;
				}fichas.innerHtml = html;
			}).catch( error => console.log(error)); //capturamos posibles errores
	}
};

window.onload = function(){
	app.cargarFichas();
}