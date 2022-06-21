<?php 
class Materia {
    private $nombre;
    private $descripcion;
    private $idProfesor;

    

    /**
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of descripcion
     */ 
    public function getDescripcion()
    {
        return $this->descripcion;
    }

    /**
     * Set the value of descripcion
     *
     * @return  self
     */ 
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    /**
     * Get the value of idProfesor
     */ 
    public function getIdProfesor()
    {
        return $this->idProfesor;
    }

    /**
     * Set the value of idProfesor
     *
     * @return  self
     */ 
    public function setIdProfesor($idProfesor)
    {
        $this->idProfesor = $idProfesor;

        return $this;
    }

    public function altaProfesor() {
        //todo: asignar un profesor a la materia, ingresa el idprofesor en el campo idprofesor
    }

    /**
     * Saca un profesor de la materia, elimina su id 
     * en el campo idProfesor
     * 
     * @return true si lo dió de baja satisfactoriamenwte
     */
    public function bajaProfesor() {
        //todo: 
    }

}

?>