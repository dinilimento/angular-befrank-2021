import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	templateUrl: './admin.page.html',
	styleUrls: ['./admin.page.scss']
})
export class AdminPage implements OnInit {
	form!: FormGroup;
	
	constructor(
		private http: HttpClient,
		private fb: FormBuilder) { }

	ngOnInit() {
		this.form = this.fb.group({
			message: [, Validators.required]
		});
	}

	announce() {
		let msg = this.form.value;
		this.http.post('http://localhost:1337/api/admin/announce', msg).subscribe();
	}
}