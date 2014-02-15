	$jin.method - ������������ ������� � �������� ������ ������-���� ��������� ���������� �������.
	
	�������� ������:
	
	$jin.method({ '$my.app.init': funciton( ){
		console.log( 'init' )
	}})
	
	������ ����� ������� �, ��������, ���:
	
	$my.app.init()
	
	������� ����� �������� �������� prototype:
	
	$my.cat = function(){}
	$jin.method({ '$my.cat..mew': funciton( ){
		console.log( 'mew' )
	}})
	
	;(new $my.cat).mew()
	
	�� ����������� ��������� ��������������� ������������� ������:
	
	$jin.method({ '$my.app.init': function( ){
		console.log( 'init' )
	}})
	
	$jin.method({ '$my.app.init': function( ){
		console.log( 'init2' )
	}})
	
	$my.app.init() // ��� ����� ����������
	
	����� ��������� �������������� �����, ����� ��������� ������ ��� ����������������� ������ � ���� �������:
	
	$jin.method({ '$my.app.init': function( ){
		console.log( 'init' )
	}})
	
	$jin.method({ '$my.app.init2': function( ){
		override: '$my.app.init'
		console.log( 'init2' )
	}})
	
	$jin.method({ '$my.app.init': $my.app.init2 })
	
	$my.app.init() // ��� ����� �������� ������ init2
	
	�� �������� ���� �� ������ ��������������, � ��������� �������� �����. ��� �������������� ������ �������� � ������� �� ������� �����:

	$jin.method({ '$my.app.init': function( ){
		console.log( 'init' )
	}})
	
	$jin.method({ '$my.app.init2': function( ){
		this['$my.app.init']()
		console.log( 'init2' )
	}})
	
	$jin.method({ '$my.app.init': $my.app.init2 })
	
	$my.app.init() // ��� ����� �������� init, � ����� init2

	������ ������������ ����� �������� ��������� ����������� �������?
	+ ������������� ���������, ����� ���� ����� �������� �������� ������
	+ ������������� ��������� ������������� ����������
	+ � �������� � ���������� ����� � �� ��������� ������ ��� ���� "$jin.method.$my.app.init2" ������ ������������ "(anonymous function)"
	+ ����������� ���������� ������ � ������������ �������
	
	����������:
	- ��������� ���������� ������
	- IDE ��� ����������� JSDoc-�� �� �������� ��� ��� ����������
	
	��� ������ JSDoc ��� IDE:
	
	/** @name $my.cat#mew */
	$jin.method({ '$my.cat..mew': function( ){
		console.log( 'mew' )
	}})
	
	�������� ����� �������� ������� ����� �� ������� ��� ���������������. ����� �������� ����� ����� ������� ������������� JSDoc-��.
	
	$jin.method({ '$my.app.init2': function( ){
		this['$my.app.init']()
		console.log( 'init2' )
	}})
	
	$jin.method({ '$my.app.init': $my.app.init2 })
	
	$jin.method({ '$my.app.init': function( ){
		console.log( 'init' )
	}})
	
	$my.app.init() // ��� ����� �������� init, � ����� init2
