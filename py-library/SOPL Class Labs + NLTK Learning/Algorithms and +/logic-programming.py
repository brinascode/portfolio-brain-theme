# Logic programming: You do not really tell the computer what to do.
# You just define facts and query those facts.
# This is actually easier to do in logic programming langs than imperative langs because they are designed to d ojust that
# You would have to use a bunch of booleans and if statements in imperative langs for this
# ProLog is an example of a logic programming lang
# Kanren is a library that simulates prolog
from kanren import run,eq,var
w = var()
x = var()
y = var()
z = var()

ans = run(1,x,eq(x,5)) #The basic hello world of logic programming. Means: What does x equal when x equals 5?
print(ans)

# Really good for hierarchical data, solving things in trees etc
from kanren import Relation, facts 
# Find parent
parent = Relation()
facts(parent,("Homer","Bart"), ("Marge","Bart"),("Homer","Maggie"),("Homer","Lisa"),("Marge","Maggie"),("Marge","Lisa"),("Abe","Homer"))
# We gave the system facts now we can query:
# Find parent
ans = run(3,x,parent("Homer",x))
print(ans)

ans2 = run(2,x,parent("Bart"))

# Grandparents
gp = run(1,x,parent(x,y),parent(y,"Lisa"))
print (gp)


# You're not telling the machine HOW to do this. We set up facts about the system and we set up an equationdatetime A combination of a date and a time. Attributes: ()
# Logic programming is big in AI. As you can see you can chain queries easily in order to produce generalized knowledge
# You can just express a different relationship and still get the results. Experessing a different equation that we would like solved. 
# Lookup Google Knowledge Graph. Or other kinds of Knowledge Graphs.  


# Siblings (full siblings)
sb = run( 3,z,parent(w,"Bart"),parent(x,"Bart"),parent(w,z),parent(x,z) )
# Half siblings
hsb = run(3,x,parent(y,x),parent(y,"Bart"))
print(sb)

# How would you do this in object oriented programming?  Using ids and relational properties.
# How would logic do this better? --> Less storage and repetition. You already defined the relationship.


# You could use logic as an answer to programming challenges...
