$jin.method - ������������ ������� � �������� ������ ������-���� ��������� ���������� �������.

�������� ������:
```js
$jin.method({ '$my.app.init': funciton( ){
	console.log( 'init' )
}})
```

������ ����� ������� �, ��������, ���:
```js
$my.app.init()
```

������� ����� �������� �������� prototype:
```js
$my.cat = function(){}
$jin.method({ '$my.cat..mew': funciton( ){
	console.log( 'mew' )
}})

;(new $my.cat).mew()
```

�� ����������� ��������� ��������������� ������������� ������:
```js
$jin.method({ '$my.app.init': function( ){
	console.log( 'init' )
}})

$jin.method({ '$my.app.init': function( ){
	console.log( 'init2' )
}})

$my.app.init() // ��� ����� ����������
```

����� ��������� �������������� �����, ����� ��������� ������ ��� ����������������� ������ � ���� �������:
```js
$jin.method({ '$my.app.init': function( ){
	console.log( 'init' )
}})

$jin.method({ '$my.app.init2': function( ){
	override: '$my.app.init'
	console.log( 'init2' )
}})

$jin.method({ '$my.app.init': $my.app.init2 })

$my.app.init() // ��� ����� �������� ������ init2
```

�� �������� ���� �� ������ ��������������, � ��������� �������� �����. ��� �������������� ������ �������� � ������� �� ������� �����:
```js
$jin.method({ '$my.app.init': function( ){
	console.log( 'init' )
}})

$jin.method({ '$my.app.init2': function( ){
	this['$my.app.init']()
	console.log( 'init2' )
}})

$jin.method({ '$my.app.init': $my.app.init2 })

$my.app.init() // ��� ����� �������� init, � ����� init2
```

������� ����������� ������������� ������� �� �����:
```js
$jin.method({ '$my.app.init2': function( ){
	this['$my.app.init']()
	console.log( 'init2' )
}})

$jin.method({ '$my.app.init': $my.app.init2 })

$jin.method({ '$my.app.init': function( ){
	console.log( 'init' )
}})

$my.app.init() // ��� ����� �������� init, � ����� init2
```

������ ������������ ����� �������� ��������� ����������� �������?
+ ������������� ���������, ����� ���� ����� �������� �������� ������
+ ������������� ��������� ������������� ����������
+ � �������� � ���������� ����� � �� ��������� ������ ��� ���� "$jin.method.$my.app.init2" ������ ������������ "(anonymous function)"
+ ����������� ���������� ������ � ������������ �������

����������:
- ��������� ���������� ������
- IDE ��� ����������� JSDoc-�� �� �������� ��� ��� ����������

��� ������ JSDoc ��� IDE:
```js
/** @name $my.cat#mew */
$jin.method({ '$my.cat..mew': function( ){
	console.log( 'mew' )
}})
```

�������� ����� �������� ������� ����� �� ������� ��� ���������������. ����� �������� ����� ����� ������� ������������� JSDoc-��.
